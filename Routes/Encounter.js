// routes/encounter.js
const express = require('express');
const router = express.Router();
const Encounter = require('../models/encounter');

// Start a new encounter
router.post('/encounters', async (req, res) => {
  try {
    const encounter = new Encounter(req.body);
    await encounter.save();
    res.status(201).json(encounter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all encounters
router.get('/encounters', async (req, res) => {
  try {
    const encounters = await Encounter.find();
    res.status(200).json(encounters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
