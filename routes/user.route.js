
const express = require('express');
//const router = express.Router();
const app = express.Router();
const user = require('../controllers/user.controllers.js');

// CREATE ----------------------------------------------------------------------------

// Create User
app.post('/user', user.user_create);

// READ ----------------------------------------------------------------------------

//Read user
app.get('/user/:id', user.findOne);

// UPDATE ----------------------------------------------------------------------------

// Update User
app.put('/:id/update', user.user_update);

// EXPORT ----------------------------------------------------------------------------

module.exports = app;
