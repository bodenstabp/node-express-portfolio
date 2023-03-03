const express = require('express');
const router = express.Router();

// Link to portfolio JSON file
const { portfolio } = require('../data.json');

// Load static files
router.use('/static', express.static('public'));

// Determines whether project input is valid and routes to either the project or creates an error
router.use('/:id', (req, res, next) => {
  const found = portfolio.some(item => item.id === parseInt(req.params.id));
  if (found) {
    res.render('project', { project: portfolio[req.params.id] });
    next();
  } else {
    const err = new Error();
    err.message = 'Something went wrong';
    err.status = 404;
    res.render('page-not-found');
    next(err);
  }
});

module.exports = router;
