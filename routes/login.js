const express = require('express');
const router = express.Router();

let { people } = require('../data')

//POST
router.post('/', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.send(400).json({ success: false, msg: 'Please provide a name value' })
  }
  res.status(201).send({ success: true, person: [...people, { name }] })
})



module.exports = router;