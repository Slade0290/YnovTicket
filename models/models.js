
const mongoose = require('mongoose');

// Ticket model
const TicketSchema = mongoose.Schema({
    id : Number,
    title : String,
    description : String,
    type : String,
    dateCreation : Date,
    lastUpdate : Date,
    priority : String,
    status : String,
    author : String,
    supportName : String,
    comment : {type : Array, "Number" : [] }
}, {
    timestamps: true
});

module.exports = mongoose.model('Ticket', TicketSchema);

// Comment model
const CommentSchema = mongoose.Schema({
    id : Number,
    author : String,
    message : String,
    date : Date,
    attachment : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', CommentSchema);

// User model
const UserSchema = mongoose.Schema({
    id : Number,
    userType : String,
    admin : Boolean,
    fname : String,
    lname : String,
    email : String,
    department : String,
    company : String,
    endContract : Date
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);

// Hardware model
const HardwareSchema = mongoose.Schema({
    id : Number,
    type : String,
    beginDate : Date,
    marque : String,
    modele : String,
    addressIP : String,
    soft : String,
    status : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Hardware', HardwareSchema);

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
