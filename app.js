const express = require("express");
const { router, connectToDatabase } = require("./giftRoutes");
const searchRoutes = require("./searchRoutes");
const { MongoClient } = require("mongodb");

const app = express();
const uri = "mongodb://localhost:27017";

let db;

async function start() {
  const client = new MongoClient(uri);
  await client.connect();
  db = client.db("giftlink");

  app.locals.db = db;

  app.use(express.json());
  app.use(router);
  app.use(searchRoutes);

  app.get("/api/search", (req, res) => {
    res.send("Search route working");
  });

  app.listen(3000, () => console.log("Server running"));
}

start();
