const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../models/User');

const seedSupportUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to database');

    // Check karo ki ye email already exist karta hai kya
    const existingUser = await User.findOne({ email: 'support@tatamotors.com' });

    if (existingUser) {
      console.log('Support user already exists, skipping creation.');
      process.exit();
    }

    const supportUser = new User({
  name: 'Support Staff',
  phone: '9876543210',
  email: 'support@tatamotors.com',
  password: 'supp1234',
  role: 'support',
});

    await supportUser.save();
    console.log('Support user created successfully!');

    process.exit();
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
};

seedSupportUser();