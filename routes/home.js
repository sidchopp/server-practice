const express = require('express');
const router = express.Router();

//GET
router.get('/home', (req, res) => {
  // Disable caching for content files
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);
  res.status(200).send('<h2>Welcome!!</h2>')
});

module.exports = router;