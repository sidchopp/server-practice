const express = require('express');
const router = express.Router();

//Fallback for any random route other than in the routes folder
router.all('*', (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>")
});

module.exports = router;