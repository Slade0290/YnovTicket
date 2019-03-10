const mongoose = require('mongoose');

// User model
const UserSchema = mongoose.Schema({
    //id : Number,
    userType : String,
    admin : Boolean,
    fname : String,
    lname : String,
    email : String,
    department : String,
    company : String,
    endContract : Date,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
