const express = require('express');
// create a Router instance 
const router = express.Router();

const { getPerson, updatePerson, deletePerson } = require('../controllers/people')

router.get('/', getPerson)
router.put('/:ID', updatePerson)
router.delete('/:ID', deletePerson)

//Alternate syntax for same routes, say for /:ID (by chaining the methods)
// router.route('/:ID').put(updatePerson).delete(deletePerson)

module.exports = router;

