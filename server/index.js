import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import 'dotenv/config';
import cors from 'cors';
import router from './routes/routes.js';
import dbConnect from './config/database/DBconnect.js';

const PORT = process.env.PORT || 5000;

const app = express();
const httpServer = createServer(app); // Wrap the express app with HTTP server
const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    methods: ['GET', 'POST'],
  },
});

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

// Socket.IO Signaling Logic
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Join room
  socket.on('join-room', ({ roomId, emailId }) => {
    socket.join(roomId);
    socket.broadcast.to(roomId).emit('user-joined', { emailId, socketId: socket.id });
    console.log(`User with email ${emailId} joined room ${roomId}`);
  });

  // Handle WebRTC signaling messages
  socket.on('signal', ({ roomId, data }) => {
    socket.broadcast.to(roomId).emit('signal', data);
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Database connection and server start
dbConnect().then(() => {
  httpServer.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
  });
});
// socket.listen(3001)