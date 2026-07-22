// dashboardController.js
// This file contains the actual LOGIC for dashboard stats.
// Each function here will be connected to a URL in dashboardRoutes.js later.

const Ticket = require("../models/Ticket");
const User = require("../models/User");

// GET /api/dashboard/status-summary
// Returns how many tickets exist in each status (open, in-progress, resolved, closed)
const getStatusSummary = async (req, res, next) => {
  try {
    const summary = await Ticket.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } },
    ]);

    const formatted = {
      open: 0,
      "in-progress": 0,
      resolved: 0,
      closed: 0,
    };

    summary.forEach((item) => {
      formatted[item._id] = item.count;
    });

    res.json(formatted);
  } catch (err) {
    next(err); // hand off any error to the error-handling middleware
  }
};

// GET /api/dashboard/overview
// Returns a few simple top-level numbers for the dashboard
const getOverview = async (req, res, next) => {
  try {
    const totalTickets = await Ticket.countDocuments();
    const reopenedTickets = await Ticket.countDocuments({ reopened: true });
    const totalAgents = await User.countDocuments({ role: "support" });

    res.json({
      totalTickets,
      reopenedTickets,
      totalAgents,
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/dashboard/priority-summary
// Returns how many tickets exist per priority (low, medium, high)
const getPrioritySummary = async (req, res, next) => {
  try {
    const summary = await Ticket.aggregate([
      { $group: { _id: "$priority", count: { $sum: 1 } } },
    ]);

    const formatted = {
      low: 0,
      medium: 0,
      high: 0,
    };

    summary.forEach((item) => {
      formatted[item._id] = item.count;
    });

    res.json(formatted);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getStatusSummary,
  getOverview,
  getPrioritySummary,
};