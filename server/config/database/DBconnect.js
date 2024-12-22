import mongoose from "mongoose";

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {});
  } catch (error) {
    console.log("error connecting to the database:", error);
  }
}

export default dbConnect;