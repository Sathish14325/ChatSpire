import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.MONGODB_URI;
console.log(URI);
// const DB_NAME = process.env.DB_NAME;

// ------------- Database Connection ----------
const connectDB = async () => {
  try {
    await mongoose.connect(`${URI}`);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("MongoDB connection faild !!!: ", err);
  }
};

export default connectDB;
