const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const register = async (req, res, next) => {
  try {
    const { name, phone, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      phone,
      email,
      password,
      role,
    });

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (err) {
    next(err);
  }
};


const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = generateToken(user._id, user.role);

    res.status(200).json({
      message: "Login successful",
      token,
      user,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
};
