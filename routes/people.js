const express = require('express');
// create a Router instance 
const router = express.Router();

let { people } = require('../data')

//GET
router.get('/', (req, res) => {
  // Disable caching for content files
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);
  // res.status(200).send('<h2>Welcome!!</h2>')
  res.status(200).json({ success: true, data: people })
})


//PUT for update
router.put('/:ID', (req, res) => {
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
router.delete('/:ID', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.ID))
  // console.log(person);
  if (!person) {
    return res.status(404).json({ success: false, msg: `No person is found with id ${req.params.ID}` })
  }
  const newPeople = people.filter((person) => person.id !== Number(req.params.ID))
  return res.status(200).send({ success: true, data: newPeople })
})

module.exports = router;

