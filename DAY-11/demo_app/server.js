const express = require("express");
const cors = require("cors");
let db = require("./data/db.json");
const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());

app.get("/users", (req, res) => {
    res.json(db);
});

app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    const user = db.find((user) => user.id == id);
    if (!user) {
        res.status(404).json({ message: "User not found" });
    }
    res.json(user);
})

app.post("/users", (req, res) => {
    const { name, age, email } = req.body;
    const id = (db.length)?db[db.length-1].id+1:1;
    const user = { id, name, age, email };
    db.push(user);
    res.json(user);
});

app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    const user = db.find((user) => user.id == id);
    if (!user) {
        res.status(404).json({ message: "User not found" });
    }
    user.name = name;
    user.age = age;
    user.email = email;
    res.json(user);
});

app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    const user = db.find((user) => user.id == id);
    if (!user) {
        res.status(404).json({ message: "User not found" });
    }
    db = db.filter((user) => user.id != id);
    res.json(user);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
