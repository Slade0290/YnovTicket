const mongoose = require('mongoose');

// Software model
const SoftwareSchema = mongoose.Schema({
    id : Number,
    software : String,
    licence : String,
    supportAvailable : Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Software', SoftwareSchema);