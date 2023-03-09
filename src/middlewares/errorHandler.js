const { HTTPError } = require('../utils/errors');

const errorHandler = (err, req, res, next) => {
  if (err instanceof HTTPError) {
    res.status(err.status).json({ message: err.message, error: err, success: false });
    next();
  }
  res.status(500).json({ message: err, error: err, success: false });
  next();
};

module.exports = { errorHandler };
