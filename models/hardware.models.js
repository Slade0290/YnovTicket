const mongoose = require('mongoose');

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