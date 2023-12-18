const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const patientRoutes = require('./Routes/Patient');
const encounterRoutes = require('./Routes/Encounter');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/healthcare', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(bodyParser.json());

// Routes
const patientRoutes = require('./Routes/Patient');
const encounterRoutes = require('./Routes/Encounter');

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
