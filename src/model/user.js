const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  party: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
