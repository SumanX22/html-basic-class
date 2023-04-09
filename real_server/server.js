const express = require("express");
const mongoose = require("mongoose");

// routes
const userRoutes = require("./routes/user.route");

mongoose
  .connect("mongodb://127.0.0.1:27017/myDB")
  .then(() => console.log("Connected to the database..."))
  .catch(() => console.log("Error connecting to the database!"));

const app = express();

// JSON parser
app.use(express.json());

// home server route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Server" });
});

// user
app.use("/user", userRoutes);

// for anything not found in the server routes
app.get("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

const PORT = 5000;

app.listen(PORT, () => console.log("Server started ar port " + PORT));
