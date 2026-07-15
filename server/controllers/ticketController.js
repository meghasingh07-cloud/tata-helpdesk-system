
const Ticket = require('../models/Ticket');

const createTicket = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const ticket = await Ticket.create({
      title,
      description,
      createdBy: req.user._id
    });
    res.status(201).json(ticket);
  } catch (err) {
    next(err);
  }
};

const getMyTickets = async (req, res, next) => {
  try {
    const filter = { createdBy: req.user._id };
    if (req.query.status) filter.status = req.query.status;

    const tickets = await Ticket.find(filter)
      .populate('resolvedBy', 'name')
      .sort({ createdAt: -1 });

    res.json(tickets);
  } catch (err) {
    next(err);
  }
};

const getAllTickets = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;

    const tickets = await Ticket.find(filter)
      .populate('createdBy', 'name email mobile')
      .populate('resolvedBy', 'name')
      .sort({ createdAt: -1 });

    res.json(tickets);
  } catch (err) {
    next(err);
  }
};


const assignTicket = async (req, res, next) => {
  try {
    const { supportId } = req.body;
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

    ticket.assignedTo = supportId;
    ticket.status = 'in-progress';
    await ticket.save();

    res.json(ticket);
  } catch (err) {
    next(err);
  }
};

const solveTicket = async (req, res, next) => {
  try {
    const { solution } = req.body;
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

    ticket.solution = solution;
    ticket.resolvedBy = req.user._id;
    ticket.status = 'closed';
    ticket.closedAt = new Date();
    await ticket.save();

    res.json(ticket);
  } catch (err) {
    next(err);
  }
};

module.exports = { createTicket, getMyTickets, getAllTickets, assignTicket, solveTicket };