const mongoose = require('mongoose');

// Ticket model
const TicketSchema = mongoose.Schema({
    title : String,
    description : String,
    type : String,
    dateCreation : Date,
    lastUpdate : Date,
    priority : String,
    status : String,
    author : String,
    supportName : String,
    comment : {type : Array, "Number" : [] },
}, {
    timestamps: true
});

module.exports = mongoose.model('Ticket', TicketSchema);
