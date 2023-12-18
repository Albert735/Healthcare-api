// routes/nurse.js
const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

// Submit patient vitals
router.post('/vitals/:patientId', async (req, res) => {
  try {
    const { bloodPressure, temperature, pulse, spo2 } = req.body;

    const patient = await Patient.findById(req.params.patientId);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    // Assuming a nested structure for vitals within the patient document
    patient.vitals = {
      bloodPressure,
      temperature,
      pulse,
      spo2,
    };

    await patient.save();
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
