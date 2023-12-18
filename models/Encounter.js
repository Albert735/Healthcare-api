// models/encounter.js
const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patientID: String,
  date: Date,
  time: String,
  type: String,
});

const Encounter = mongoose.model('Encounter', encounterSchema);

module.exports = Encounter;
