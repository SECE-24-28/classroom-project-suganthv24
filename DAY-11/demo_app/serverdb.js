import express from "express";
import connectDB from "./mongodb.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("MongoDB connected successfully");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
