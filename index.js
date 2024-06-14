require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose"); // If using MongoDB, ensure mongoose is configured properly
const userRoutes = require("./routes/routes");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors");
const db = require("./configs/db");
const port = process.env.PORT || 3100;

// Initialize the app
const app = express();

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine
app.set("view engine", "ejs");

// Use cors middleware
app.use(cors());

// Use routes
app.use("/", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/users/new/dashboard`);
});
