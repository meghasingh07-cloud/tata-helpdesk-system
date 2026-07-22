const errorHandler = (err, req, res, next) => {
  console.error(err.message); 

  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    message: err.message || "Something went wrong on the server",
  });
};

module.exports = errorHandler;