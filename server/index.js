import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import router from './routes/routes.js';
import dbConnect from './config/database/DBconnect.js';
// import { RtcTokenBuilder, RtcRole } from 'agora-access-token';
import pkg from 'agora-access-token'; // Correct import for CommonJS module
const { RtcTokenBuilder, RtcRole } = pkg;
const PORT = process.env.PORT || 5000;
const APP_ID = process.env.AGORA_APP_ID;
const APP_CERTIFICATE = process.env.AGORA_APP_CERTIFICATE;

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', router);


// Agora Token Generation Endpoint
app.post('/api/generate-token', (req, res) => {
  const { channelName, uid } = req.body;

  if (!channelName || !uid) {
      return res.status(400).json({ error: 'Channel name and UID are required.' });
  }

  const role = RtcRole.PUBLISHER; // Role can be PUBLISHER or SUBSCRIBER
  const expirationTimeInSeconds = 3600; // Token valid for 1 hour
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

  try {
      const token = RtcTokenBuilder.buildTokenWithUid(
          APP_ID,
          APP_CERTIFICATE,
          channelName,
          uid,
          role,
          privilegeExpiredTs
      );

      res.json({ token, channelName });
  } catch (error) {
      res.status(500).json({ error: 'Failed to generate token', details: error.message });
  }
});


import nodemailer from "nodemailer";

app.post("/api/notify-doctor", async (req, res) => {
  const { doctorId, channelName } = req.body;

  if (!doctorId || !channelName) {
    return res.status(400).json({ error: "Doctor ID and channel name are required." });
  }

  try {
    // Fetch the doctor's email from your database (replace with actual DB query)
    const doctor = await doctor.findById(doctorId); // Assuming a Doctor model
    const doctorEmail = doctor.email;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Email Content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: doctorEmail,
      subject: "Video Call Invitation",
      text: `You have an incoming video call. Please join using the following channel: ${channelName}`,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    res.json({ message: "Doctor notified successfully via email." });
  } catch (error) {
    console.error("Error notifying doctor:", error);
    res.status(500).json({ error: "Failed to notify doctor.", details: error.message });
  }
});



// Database connection and server start
dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
  });
});
