const mongoose = require('mongoose');

// Hardware model
const HardwareSchema = mongoose.Schema({
    type : String,
    marque : String,
    modele : String,
    addressIP : String,
    soft : String,
    status : String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Hardware', HardwareSchema);
