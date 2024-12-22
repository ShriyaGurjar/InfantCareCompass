import express from 'express';
import 'dotenv/config';
import router from './routes/routes.js';
import dbConnect  from './config/database/DBconnect.js';
const PORT = process.env.PORT || 5000;

const app = express();

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