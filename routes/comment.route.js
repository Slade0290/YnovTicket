
const express = require('express');
//const router = express.Router();
const app = express.Router();
const comment = require('../controllers/comment.controllers.js');

// CREATE ----------------------------------------------------------------------------

// Create Comment
app.post('/comment', comment.comment_create);

// READ ----------------------------------------------------------------------------

//Read a comment
app.get('/comment/:id', comment.findOne);

// UPDATE ----------------------------------------------------------------------------

// Update Comment
router.put('/:id/update', comment_controller.comment_update);

// EXPORT ----------------------------------------------------------------------------

module.exports = app;
