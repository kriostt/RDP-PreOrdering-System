const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createClient } = require("@sanity/client");

// import routes
const userRoutes = require("./userRoutes");

// import Express.js framework
const express = require("express");
// create an instance of Express application
const app = express();

// set up middleware
var corsOptions = {
  origin: `http://localhost:5173`, // Specifying the allowed origin for CORS requests
  methods: "GET, POST, PATCH, PUT, DELETE", // Specifying the allowed HTTP methods
};
app.use(cors(corsOptions)); // enable cross-origin resource sharing
app.use(express.json());
app.use(morgan("dev")); // use Morgan for logging HTTP requests
app.use(bodyParser.urlencoded({ extended: true })); // parse url-encoded bodies
app.use(bodyParser.json()); // parse JSON bodies

// initialize Sanity client
const client = createClient({
  projectId: "6dspwvza",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07",
});

// set up middleware
app.use("/", userRoutes);

// set port for the server
const PORT = 3001;
// start the server and log the port it's running on
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = client;
