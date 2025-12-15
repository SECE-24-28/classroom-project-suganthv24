import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./model/usermodel.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/MERN").then(() => {
    console.log("Connected to MongoDB");
})

//Get all users
app.get("/users", (req, res) => {
    User.find().then((users) => res.json(users));
})

//Get user by id
app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    User.findById(id).then((user) => res.json(user));
})

//Create user
app.post("/users", (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    user.save().then(() => res.json({ message: "User created successfully" }));
})

//Update user
app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    User.findByIdAndUpdate(id, { name, email, password }).then(() => res.json({ message: "User updated successfully" }));
})

//Delete user
app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    User.findByIdAndDelete(id).then(() => res.json({ message: "User deleted successfully" }));
})

app.listen(4000, () => {
    console.log("Server is running on port 4000");
})
