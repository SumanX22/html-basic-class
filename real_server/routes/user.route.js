const express = require("express");
const User = require("../models/user.model");

const router = express.Router();

// GET /user
// GETS ALL the users in the database
router.get("/", async (req, res) => {
  const users = await User.find({});
  res.json({ message: "Successfully got users!", users: users });
});

// POST /user
// Creates a new user in the database
router.post("/", async (req, res) => {
  try {
    const payload = req.body;

    const newUser = new User(payload);

    const createdUser = await newUser.save();

    return res.json({
      message: "User is successfully created!",
      user: createdUser,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      message: "Could not create user!",
      error: error.message,
    });
  }
});

// PUT /user
// Creates a new user in the database
router.put("/", async (req, res) => {
  try {
    const payload = req.body; // WHAT TO PUT
    const query = req.query; // what to change

    const _id = query._id;

    const updatedUser = await User.findOneAndUpdate({ _id: _id }, payload, {
      new: true,
    });

    return res.json({
      message: "User changed!",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      message: "Could not create user!",
      error: error.message,
    });
  }
});

// DELETE /user
// Creates a new user in the database
router.delete("/", async (req, res) => {
  try {
    const query = req.query; // what to change

    const _id = query._id;

    await User.deleteOne({ _id: _id });

    return res.json({
      message: "Successfully deleted user!",
    });
  } catch (error) {
    console.error(error);
    return res.json({
      message: "Could not create user!",
      error: error.message,
    });
  }
});

module.exports = router;
