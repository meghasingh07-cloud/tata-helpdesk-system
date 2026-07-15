const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../models/User');

const seedSupportUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to database');

    const supportUser = new User({
      name: 'Support Staff',
      email: 'support@tatamotors.com',
      password: 'support1234',
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