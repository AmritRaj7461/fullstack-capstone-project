const express = require("express");
const router = express.Router();

router.get("/api/search", async (req, res) => {
  const category = req.query.category;

  const items = await req.app.locals.db
    .collection("items")
    .find({ category: category })
    .toArray();

  res.json(items);
});

module.exports = router;
