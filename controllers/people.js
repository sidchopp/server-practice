let { people } = require('../data')

//Get
const getPerson = (req, res) => {
  // Disable caching for content files
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);
  res.status(200).json({ success: true, data: people })
}

//Put
const updatePerson = (req, res) => {
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
}

//Delete
const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.ID))
  // console.log(person);
  if (!person) {
    return res.status(404).json({ success: false, msg: `No person is found with id ${req.params.ID}` })
  }
  const newPeople = people.filter((person) => person.id !== Number(req.params.ID))
  return res.status(200).send({ success: true, data: newPeople })
}

module.exports = { getPerson, updatePerson, deletePerson }
