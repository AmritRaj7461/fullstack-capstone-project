const express = require("express");
const router = express.Router();

let users = [];

// Register
router.post("/api/register", (req, res) => {
  users.push(req.body);
  res.send("User registered");
});

// Login
router.post("/api/login", (req, res) => {
  res.send("User logged in");
});

// Update
router.put("/api/update", (req, res) => {
  res.send("User updated");
});

module.exports = router;
