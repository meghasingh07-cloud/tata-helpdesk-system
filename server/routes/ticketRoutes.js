const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');
const {
  createTicket,
  getMyTickets,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
  assignTicket,
  solveTicket,
  confirmTicket
} = require('../controllers/ticketController');
const { createTicketValidator, solveTicketValidator } = require('../validators/ticketValidator');

router.use(protect);

router.post('/', authorize('user'), createTicketValidator, createTicket);
router.get('/my', authorize('user'), getMyTickets);
router.get('/', authorize('support', 'admin'), getAllTickets);
router.get('/:id', getTicketById);
router.patch('/:id', authorize('user'), createTicketValidator, updateTicket);
router.delete('/:id', authorize('user'), deleteTicket);
router.patch('/:id/assign', authorize('admin'), assignTicket);
router.patch('/:id/solve', authorize('support'), solveTicketValidator, solveTicket);
router.patch('/:id/confirm', authorize('user'), confirmTicket);

module.exports = router;
