
const express = require('express');
//const router = express.Router();
const app = express.Router();
const hardware = require('../controllers/hardware.controllers.js');

// CREATE ----------------------------------------------------------------------------

// Create Hardware
app.post('/hardware', hardware.hardware_create);

// READ ----------------------------------------------------------------------------

//Read hardware
app.get('/hardware/:id', hardware.findOne);

// UPDATE ----------------------------------------------------------------------------

// Update Hardware
router.put('/:id/update', hardware_controller.hardware_update);

// EXPORT ----------------------------------------------------------------------------

module.exports = app;
