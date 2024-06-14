const express = require("express");
const router = express.Router();
const usercontrollers = require("../controllers/controllers");
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Get all users
router.get("/", usercontrollers.allusers);

// Get user by ID
router.get("/users/:id", usercontrollers.searchusers);

// Delete user by ID
router.delete("/users/delete/:id", usercontrollers.deleteusers);

// Add new user
router.post("/users/add", usercontrollers.addusers);

// Update user by ID
router.put("/users/update/:id", usercontrollers.updateusers);

// Dashboard
router.get("/users/new/dashboard", usercontrollers.abs);


module.exports = router;
