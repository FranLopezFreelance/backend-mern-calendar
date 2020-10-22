const register = (req, res) => {
  res.json({ message: 'Register' });
};

const login = (req, res) => {
  res.json({ message: 'Login' });
};

const refToken = (req, res) => {
  res.json({ message: 'Refresh token' });
};

module.exports = {register, login, refToken};