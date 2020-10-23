const { Router } = require('express');
const { registerValidator, loginValidator } = require('../validators/auth.validators');

const router = Router();

//Controller
const {register, login, refToken} = require(
  '../controllers/auth.controller'
);

//Routes
router.post('/register', registerValidator, register);
router.post('/login', loginValidator, login);
router.get('/ref-token', refToken);

module.exports = router;
