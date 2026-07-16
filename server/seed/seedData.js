const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../models/User');
const Ticket = require('../models/Ticket');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to database');

    let normalUser = await User.findOne({ email: 'employee@tatamotors.com' });

    if (!normalUser) {
      normalUser = await User.create({
        name: 'Employee One',
        phone: '9123456789',
        email: 'employee@tatamotors.com',
        password: 'emp12345',
        role: 'user',
      });
      console.log('Normal user created');
    } else {
      console.log('Normal user already exists');
    }

    const supportUser = await User.findOne({ email: 'support@tatamotors.com' });

    const existingTicket = await Ticket.findOne({ title: 'Laptop not turning on' });

    if (!existingTicket) {
      await Ticket.create({
        title: 'Laptop not turning on',
        description: 'My laptop is not powering on since this morning.',
        status: 'open',
        priority: 'high',
        createdBy: normalUser._id,
        assignedTo: supportUser ? supportUser._id : null,
      });
      console.log('Sample ticket created');
    } else {
      console.log('Sample ticket already exists');
    }

    process.exit();
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
};

seedData();