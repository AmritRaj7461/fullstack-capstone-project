const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

router.get("/api/search", async (req, res) => {
  try {
    const category = req.query.category;

    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db("giftlink");

    const items = await db
      .collection("items")
      .find({ category: category })
      .toArray();

    res.json(items);

    await client.close(); // optional but good practice
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
