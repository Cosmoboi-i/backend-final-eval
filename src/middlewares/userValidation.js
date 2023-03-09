const axios = require('axios');

const validate = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) res.status(401).send('Sign in to continue');
  try {
    const result = await axios({
      method: 'get',
      url: 'http://localhost:8888/validate',
      headers: {
        Authorization: token,
      },
    });
    req.user = result.data;
    console.log(req.user);
    next();
  } catch (e) {
    res.status(e.response.status).json({ message: e.response.data });
  }
};

module.exports = {
  validate,
};
