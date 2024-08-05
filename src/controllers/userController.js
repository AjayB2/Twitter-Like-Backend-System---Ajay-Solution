const userService = require('../services/userService');

exports.register = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body.username, req.body.password);
    res.status(201).send('User registered');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.login = async (req, res) => {
  try {
    const token = await userService.loginUser(req.body.username, req.body.password);
    res.json({ token });
  } catch (err) {
    res.status(400).send(err.message);
  }
};
