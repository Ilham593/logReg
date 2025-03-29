import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); //load env variables

const connectDB = async () => {
  try {
    const conn =await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected", conn.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default connectDB