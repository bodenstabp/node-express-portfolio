const express = require('express');
const router = express.Router();

// Link to portfolio JSON file
// const { portfolio } = require('../data.json');

router.get('/', (req, res, next) => {
  res.render('about');
  res.status(500);
  next();
});

module.exports = router;
