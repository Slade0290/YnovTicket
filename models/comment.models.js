const mongoose = require('mongoose');

// Comment model
const CommentSchema = mongoose.Schema({
    author : String,
    message : String,
    date : Date,
    attachment : String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', CommentSchema);
