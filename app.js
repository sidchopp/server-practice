const express = require('express');
const app = express();
const { people } = require('./data')
// console.log(people);

//By default, req.body is undefined, and is populated when you use body-parsing middleware such as express.json() or express.urlencoded().
//Middleware
app.use(express.json()) // for parsing application/json

//METHODS

//GET
app.get('/', (req, res) => {
  // Disable caching for content files
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);
  res.status(200).send('<h2>Welcome!!</h2>')
})


app.get('/people', (req, res) => {
  // Disable caching for content files
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);
  // res.status(200).send('<h2>Welcome!!</h2>')
  res.status(200).json({ success: true, data: people })
})

//POST
app.post('/login', (req, res) => {
  const { name } = req.body
  res.status(200).send(name)
})

//PUT for update
app.put('/people/:ID', (req, res) => {
  const { ID } = req.params;
  const { name } = req.body;
  // console.log(ID, name);
  const person = people.find((person) => person.id === Number(ID))
  // console.log(person);
  if (!person) {
    return res.status(404).json({ success: false, msg: `No person is found with id ${ID}` })
  }

  const newPerson = people.map((person) => {
    if (person.id === Number(ID)) {
      person.name = name
    }
    // console.log(person);
    return person

  })
  // console.log(newPerson);
  res.status(200).json({ success: true, data: newPerson })
})

//DELETE
app.delete('/people/:ID', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.ID))
  // console.log(person);
  if (!person) {
    return res.status(404).json({ success: false, msg: `No person is found with id ${req.params.ID}` })
  }
  const newPeople = people.filter((person) => person.id !== Number(req.params.ID))
  return res.status(200).send({ success: true, data: newPeople })
})

app.all('*', (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>")
})


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
})