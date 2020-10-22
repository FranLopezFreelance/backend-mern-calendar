const express = require('express');
require('dotenv').config();

//App
const app = express();

//Middlewares
app.use(express.static('public'));
app.use('/api/auth', require('./routes/auth.routes'));

//Run server
app.listen(process.env.PORT, () => {
  console.log(`Serv're listening on port ${process.env.PORT}`);
});
