const { body, validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  next();
};

const createTicketValidator = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  validate
];

const solveTicketValidator = [
  body('solution').notEmpty().withMessage('Solution is required'),
  validate
];

module.exports = { createTicketValidator, solveTicketValidator };