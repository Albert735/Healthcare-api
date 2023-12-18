// routes/patient.js
const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');


// Create a new patient
router.post('/patients', async (req, res) => {
    try {
      const {
        patientID,
        surname,
        otherNames,
        gender,
        phoneNumber,
        residentialAddress,
        emergencyContact,
      } = req.body;
  
      const patient = new Patient({
        patientID,
        surname,
        otherNames,
        gender,
        phoneNumber,
        residentialAddress,
        emergencyContact,
      });
  
      await patient.save();
      res.status(201).json(patient);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get all patients
  router.get('/patients', async (req, res) => {
    try {
      const patients = await Patient.find();
      res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Get all patients
router.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get details of a specific patient
router.get('/patients/:id', async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
