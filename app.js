const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

// Importing dotenv to use environment variables
require('dotenv').config();

// Importing routes
const homeRoute = require('./api/routes/HomeRoute');
const demoRoute = require('./api/routes/DemoRoute');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up the 'views' directory for template rendering using EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Enable request logging in the development environment
app.use(morgan('dev'));

// Parse incoming request bodies as JSON
app.use(bodyParser.json({ type: 'application/json' }));

// Parse incoming request bodies as TEXT
app.use(bodyParser.text({ type: 'text/*' }));

// Parse incoming request bodies as RAW
app.use(bodyParser.raw({ type: 'application/*' }));

// Define routes for the home and demo endpoints
app.use('/', homeRoute);
app.use('/demo', demoRoute);

// Middleware to handle 404 errors (route not found)
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Middleware to handle other errors (e.g., internal server errors)
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

module.exports = app; // Export the Express application
