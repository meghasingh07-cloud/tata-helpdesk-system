const Ticket = require("../models/Ticket");
const User = require("../models/User");


// no of tickets in each status 
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
    next(err);
  }
};

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
// no of tickets per priority
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