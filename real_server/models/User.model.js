const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true, // this is mandatory to create any new document
  },
  gender: {
    type: String,
    enum: ["MALE", "FEMALE", "OTHER"],
    required: true,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true, // this needs to be unique all through the collection
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
