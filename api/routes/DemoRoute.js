// api/routes/DemoRoute

// Import the necessary modules
const express = require('express');
const router = express.Router(); // Create a new router object to define routes

// Define a GET request handler for the root path ("/") of the demo route
router.get('/', function (req, res, next) {
  res.status(200).send('This is a demo route'); // Respond with a simple message
});

// Define a POST request handler for the root path ("/") of the demo route
router.post('/', function (req, res, next) {
  const body = req.body; // Extract the request body
  res.status(200).send(body); // Respond with a simple message
});

module.exports = router; // Export the router to be used in other parts of the application
