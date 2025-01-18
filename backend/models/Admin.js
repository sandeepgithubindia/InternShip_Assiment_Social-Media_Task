const mongoose = require('mongoose');

// Admin Schema
const adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },  // Plain text password
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
