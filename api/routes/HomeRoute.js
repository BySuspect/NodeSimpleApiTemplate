// api/routes/HomeRoute

// Import the necessary modules
const express = require("express");
const router = express.Router(); // Create a new router object to define routes

router.get("/", function (req, res, next) {
  // Handle a GET request to the root path ("/") of the home route

  // Uncomment the line below to send a plain text response
  // res.status(200).send("Api Home");

  // Instead, render an "views/Home.ejs" view and pass data to it
  res.render("Home", { demovalue: "Hello! World" });
});

module.exports = router; // Export the router to be used in other parts of the application
