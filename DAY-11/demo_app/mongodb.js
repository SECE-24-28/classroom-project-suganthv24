import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://suganthv:Suganth24@jobportal.najflzy.mongodb.net/?appName=JobPortal/Job_Project");
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection failed:", error);
  }
};

export default connectDB;
