const { check } = require('express-validator');
const { dataValidator } = require('../middlewares/data-validator');

const registerValidator = [
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  check('email', 'El email es obligatorio').not().isEmpty(),
  check('email', 'El email es inválido').isEmail(),
  check('password', 'El password es debe tener al menos 6 caractéres').isLength({min: 6}),
  check('password', 'El password es obligatorio').not().isEmpty(),
  dataValidator
];

const loginValidator = [
  check('email', 'El email es obligatorio').not().isEmpty(),
  check('email', 'El email es inválido').isEmail(),
  check('password', 'El password es obligatorio').not().isEmpty(),
  check('password', 'El password es debe tener al menos 6 caractéres').isLength({min: 6}),
  dataValidator
];

module.exports = { registerValidator, loginValidator };