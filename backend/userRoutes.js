// import Express.js framework
const express = require("express");
// create router instance for defining routes
const router = express.Router();

const UserController = require("./UserController"); // Importing UserController

// Defining routes for user registration and login
router.post("/register", UserController.register); // Route for user registration
router.post("/login", UserController.login); // Route for user login

module.exports = router; // Exporting the router for use in other files
