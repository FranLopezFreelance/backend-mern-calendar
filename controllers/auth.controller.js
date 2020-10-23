const { response } = require('express');

const register = (req, res = response) => {

  const {name, email, password} = req.body;

  res.status(201).json({
    data: req.body,
    message: 'Registro realizado correctamente' 
  });
};

const login = (req, res) => {

  const {email, password} = req.body;

  res.status(202).json({
    data: req.body,
    message: 'Ingreso correcto' 
  });
};

const refToken = (req, res) => {
  res.status(200).json({ 
    data: '',
    message: 'Token has been refreshed' 
  });
};

module.exports = {register, login, refToken};