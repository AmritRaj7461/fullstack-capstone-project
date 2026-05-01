const express = require("express");
const router = express.Router();
const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://localhost:27017";
let db;

async function connectToDatabase() {
  const client = new MongoClient(uri);
  await client.connect();
  db = client.db("giftlink");
}

// GET all gifts
router.get("/api/gifts", async (req, res) => {
  const gifts = await db.collection("items").find().toArray();
  res.json(gifts);
});

// GET gift by id
router.get("/api/gifts/:id", async (req, res) => {
  const gift = await db.collection("items").findOne({
    _id: new ObjectId(req.params.id),
  });
  res.json(gift);
});

module.exports = { router, connectToDatabase };
