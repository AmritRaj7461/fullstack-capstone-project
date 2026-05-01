const express = require("express");
const { router, connectToDatabase } = require("./giftRoutes");
const searchRoutes = require("./searchRoutes");
const authRoutes = require("./authRoutes");

const app = express();

app.use(express.json());

// 🔥 Connect DB from giftRoutes
connectToDatabase();

// 🔥 Routes
app.use(router); // /api/gifts routes
app.use(searchRoutes); // /api/search
app.use(authRoutes); // /api/register, /api/login

// Optional test route
app.get("/", (req, res) => {
  res.send("API is working");
});

// 🔥 Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
