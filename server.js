const express = require('express');
const mongoose = require('./db');

const app = express();
app.use(express.json());

const itemSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number
});

const Item = mongoose.model('Item', itemSchema);

// GET all items
app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

// GET items by category
app.get('/items/:category', async (req, res) => {
    const items = await Item.find({ category: req.params.category });
    res.json(items);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
