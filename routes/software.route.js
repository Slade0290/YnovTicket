
const express = require('express');
//const router = express.Router();
const app = express.Router();
const software = require('../controllers/software.controllers.js');

// CREATE ----------------------------------------------------------------------------

// Create Software
app.post('/software', software.software_create);

// READ ----------------------------------------------------------------------------

//Read software
app.get('/software/:id', software.findOne);

// UPDATE ----------------------------------------------------------------------------

// Update Software
router.put('/:id/update', software_controller.software_update);

// EXPORT ----------------------------------------------------------------------------

module.exports = app;
