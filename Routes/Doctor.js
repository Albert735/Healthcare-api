// routes/doctor.js
const express = require('express');
const router = express.Router();
const patient = require('../models/Patient');

// Get all patients
router.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
