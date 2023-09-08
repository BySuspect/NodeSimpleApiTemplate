const express = require("express");
const path = require("path");
const morgan = require("morgan"); // Middleware for logging HTTP requests
const bodyParser = require("body-parser"); // Middleware for parsing request bodies
const app = express(); // Create an Express application

const homeRoute = require("./api/routes/HomeRoute"); // Import the home route module
const demoRoute = require("./api/routes/DemoRoute"); // Import the demo route module

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Set up the 'views' directory for template rendering using EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Enable request logging in the development environment
app.use(morgan("dev"));

// Parse incoming request bodies as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes for the home and demo endpoints
app.use("/", homeRoute);
app.use("/demo", demoRoute);

// Middleware to handle 404 errors (route not found)
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// Middleware to handle other errors (e.g., internal server errors)
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

module.exports = app; // Export the Express application
