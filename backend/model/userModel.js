const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Check if the 'User' model is already compiled to prevent overwriting
const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;
