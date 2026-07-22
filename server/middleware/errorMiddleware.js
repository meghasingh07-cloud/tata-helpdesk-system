// errorMiddleware.js
// This catches any error passed via next(err) from your controllers,
// and sends back a clean JSON response instead of crashing the server.

const errorHandler = (err, req, res, next) => {
  console.error(err.message); // log it for you to see in the terminal

  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    message: err.message || "Something went wrong on the server",
  });
};

module.exports = errorHandler;