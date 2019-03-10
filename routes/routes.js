
const express = require('express');
//const router = express.Router();
const app = express.Router();

const ticket = require('../controllers/ticket.controllers.js');
const user = require('../controllers/user.controllers.js');
const comment = require('../controllers/comment.controllers.js');
const hardware = require('../controllers/hardware.controllers.js');
const software = require('../controllers/software.controllers.js');

module.exports = app;


// CREATE ----------------------------------------------------------------------------

// Create Ticket
app.post('/ticket', ticket.create);

// Create User
app.post('/user', user.create);

// Create Hardware
app.post('/hardware', hard.create);

// Create Software
app.post('/software', soft.create);

// READ ----------------------------------------------------------------------------

//Read a ticket
app.get('/ticket/:id', ticket.findOne);

//Read user
app.get('/user/:id', user.findOne);

//Read a comment
app.get('/comment/:id', comment.findOne);

//Read hardware
app.get('/hardware/:id', hardware.findOne);

//Read software
app.get('/software/:id', software.findOne);

// UPDATE ----------------------------------------------------------------------------

// Update Ticket
router.put('/:id/update', ticket_controller.ticket_update);

// Update Comment
router.put('/:id/update', comment_controller.comment_update);

// Update User
router.put('/:id/update', user_controller.user_update);

// Update Hardware
router.put('/:id/update', hardware_controller.hardware_update);

// Update Software
router.put('/:id/update', software_controller.software_update);
