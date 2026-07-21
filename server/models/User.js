const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
  type: String,
  required: true,
  match: [/^[0-9]{10}$/],
},
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: true,
     maxlength: [8, 'Password must be 8 characters or less'],
  },
  role: {
    type: String,
    enum: ['user', 'support', 'admin'],
    default: 'user',
  },
}, { timestamps: true });

user.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('User', user);