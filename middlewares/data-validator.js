const { response } = require('express');
const { validationResult } = require('express-validator');

const dataValidator = (req, res = response, next) => {

  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.status(400).json({
      message: errors.mapped()
    });
  }
  next();
};

module.exports = { dataValidator };