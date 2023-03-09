const jwt = require('jsonwebtoken');

const generateToken = (username) => jwt.sign({ username }, 'foobar', { expiresIn: '1h' });

const verifyToken = (token) => jwt.verify(token, 'foobar');

module.exports = {
  generateToken,
  verifyToken,
};
