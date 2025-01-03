import doctormodel from '../../models/user/doctorSchema.js'; // Replace with actual model path
import nodemailer from 'nodemailer';

const roomIdNotification = async (req, res) => {
  const { doctorId, roomId } = req.body;


  if (!doctorId || !roomId) {
    return res.status(400).json({
      error: !doctorId
        ? "Doctor ID is required."
        : "Room ID is required.",
    });
  }

  try {
    // Validate if doctorId is a valid MongoDB ObjectId
    if (!doctorId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid Doctor ID format." });
    }

    // Find the doctor by ID
    const doctor = await doctormodel.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found." });
    }

    const doctorEmail = doctor.email;

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: doctorEmail,
      subject: 'Video Call Invitation',
      text: `You have an incoming video call. Please join using the following link: ${roomId}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({ message: "Doctor notified successfully via email." });
  } catch (error) {
    console.error("Error notifying doctor:", error);
    res.status(500).json({
      error: "Failed to notify doctor.",
      details: error.message,
    });
  }
};

export default roomIdNotification;
