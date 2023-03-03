// Variables
const express = require('express');
const path = require('path');
const pug = require('pug');
const app = express();
const port = 3000;

// Load portfolio JSON file
// const { portfolio } = require('./data.json');

// Load static files
app.use('/static', express.static('public'));

// Load View Engine
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Routes
const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project');

app.use(mainRoutes);
app.use('/project', projectRoutes);
app.use('/about', aboutRoutes);

// 404 error handler
app.use((req, res, next) => {
  res.status(404).render('page-not-found');
  next();
});

// Global error handler
app.use((err, req, res, next) => {
  if (err) {
    console.log('Something went wrong', err);
  }
  if (err.status === 404) {
    res.status(404).render('page-not-found', { err });
  } else {
    err.message || 'Something went wrong on the server.';
    res.status(err.status || 500).render('error', { err });
  }
});

// Listens at port specified in variables
app.listen(port, console.log(`Port is running at ${port}`));
