const express = require('express');
const app = express();

const people = require('./routes/people');
const login = require('./routes/login');
const home = require('./routes/home');
const random = require('./routes/random')


//By default, req.body is undefined, and is populated when you use body-parsing middleware such as express.json() or express.urlencoded(). 
// for parsing application/json
app.use(express.json())

//routes
app.use('/people', people);
app.use('/login', login);
app.use('/', home)
app.use('/', random)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
})