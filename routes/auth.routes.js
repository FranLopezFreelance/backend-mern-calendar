const { Router } = require('express');
const router = Router();

const {register, login, refToken} = require(
  '../controllers/auth.controller'
);

router.post('/register', register);

router.post('/login', login);

router.get('/ref-token', refToken);

module.exports = router;
