const Ticket = require('../models/Ticket');

const createTicket = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title || !title.trim() || !description || !description.trim()) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    const ticket = await Ticket.create({
      title: title.trim(),
      description: description.trim(),
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
      .populate('createdBy', 'name email phone')
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
    if (!supportId) {
  return res.status(400).json({ message: 'supportId is required' });
}
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
    if (!solution || !solution.trim()) {
      return res.status(400).json({ message: 'Solution is required' });
    }
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

    ticket.solution = solution.trim();
    ticket.resolvedBy = req.user._id;
    ticket.status = 'resolved';
    ticket.resolvedAt = new Date();
    await ticket.save();
    res.json(ticket);
  } catch (err) {
    next(err);
  }
};

const getTicketById = async (req, res, next) => {
  try {
    const ticket = await Ticket.findById(req.params.id)
      .populate('createdBy', 'name email phone')
      .populate('resolvedBy', 'name');

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    res.json(ticket);
  } catch (err) {
    next(err);
  }
};

const updateTicket = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

     if (!title || !title.trim() || !description || !description.trim()) {
  return res.status(400).json({
    message: 'Title and description are required'
  });
}

    ticket.title = title.trim();
    ticket.description = description.trim();

    await ticket.save();

    res.json(ticket);
  } catch (err) {
    next(err);
  }
};

const deleteTicket = async (req, res, next) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    await ticket.deleteOne();

    res.json({ message: 'Ticket deleted successfully' });
  } catch (err) {
    next(err);
  }
};


const confirmTicket = async (req, res, next) => {
  try {
    const { confirmed } = req.body;
    if (typeof confirmed !== 'boolean') {
      return res.status(400).json({ message: 'confirmed (true/false) is required' });
    }

    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

    if (ticket.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Only the ticket creator can confirm this ticket' });
    }

    if (ticket.status !== 'resolved') {
      return res.status(400).json({ message: 'Only a resolved ticket can be confirmed' });
    }

   if (confirmed) {
  ticket.status = 'closed';
  ticket.closedAt = new Date();
  ticket.reopened = false;
} else {
      ticket.status = 'in-progress';
      ticket.assignedTo = ticket.resolvedBy;
      ticket.reopened = true;
      ticket.reopenCount += 1;
    }

    await ticket.save();
    res.json(ticket);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createTicket,
  getMyTickets,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
  assignTicket,
  solveTicket,
  confirmTicket
};