const express = require('express');
const router = express.Router();

// Link to portfolio JSON file
const { portfolio } = require('../data.json');

router.use('/:id', (req, res) => {
  res.send(portfolio.find(item => item.id.toString() === req.params.id));
});

module.exports = router;
