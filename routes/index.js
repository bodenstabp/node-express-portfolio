const express = require('express');
const router = express.Router();

// Link to portfolio JSON file
const { portfolio } = require('../data.json');

router.get('/', (req, res) => {
  res.render('index', { portfolio });
});

module.exports = router;
