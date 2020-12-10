const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;
const UserSchema = new Schema({
  // schema: cấu trúc của 1 collection
  name: { type: String, default: 'unknown', unique: true },
  email: { type: String, match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, unique: true },
  password: { type: String, required: true },
  active: { type: Number, default: 0 }, // inactive
});
// Chuyển từ Schema sang Model
const User = mongoose.model('users', UserSchema);

module.exports = User;
