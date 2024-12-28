import express from 'express';
import 'dotenv/config';
import cors from "cors";
import router from './routes/routes.js';
import dbConnect  from './config/database/DBconnect.js';
const PORT = process.env.PORT || 5000;

const app = express();

const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
  ];
  
  app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

// middleware
app.use(express.json()); // Parse JSON
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
// routes
app.use('/api', router);







// database connection and port listining
dbConnect().then(()=>{
    app.listen(PORT,()=>{
        console.log('server is running on port :', PORT);
    })
})