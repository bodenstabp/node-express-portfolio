// Variables
const express = require('express');
const path = require('path');
const pug = require('pug');
const app = express();
const port = 3000;

// Load static files
app.use('/static', express.static('public'));

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Routes
const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project');

app.use(mainRoutes);
app.use('/project', projectRoutes);
app.use('/about', aboutRoutes);

// Listens at port specified in variables
app.listen(port, console.log(`Port is running at ${port}`));
