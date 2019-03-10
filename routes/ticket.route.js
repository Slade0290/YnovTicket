
const express = require('express');
//const router = express.Router();
const app = express.Router();
const ticket = require('../controllers/ticket.controllers.js');

// CREATE ----------------------------------------------------------------------------

// Create Ticket
app.post('/ticket', ticket.ticket_create);

// READ ----------------------------------------------------------------------------

//Read a ticket
app.get('/ticket/:id', ticket.findOne);

// UPDATE ----------------------------------------------------------------------------

// Update Ticket
router.put('/:id/update', ticket_controller.ticket_update);

// EXPORT ----------------------------------------------------------------------------

module.exports = app;
