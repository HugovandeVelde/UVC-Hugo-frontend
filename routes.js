const express = require('express');
const router = express.Router();
const Item = require('./models/Item'); // Maak een Mongoose-model voor je items

// GET alle items
router.get('/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

// POST een nieuw item
router.post('/items', async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.json(newItem);
});

// Voeg andere CRUD-operaties toe...

module.exports = router;
