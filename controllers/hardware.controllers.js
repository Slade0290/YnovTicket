
// CREATE ----------------------------------------------------------------------------

// HARDWARE
exports.hard_create = function (req, res) {
    let hardware = new hardware(
        {
            id : req.body.id,
            type : req.body.type,
            beginDate : req.body.beginDate,
            marque : req.body.marque,
            modele : req.body.modele,
            addressIP : req.body.addressIP,
            soft : req.body.soft,
            status : req.body.status
        }
    );

    hardware.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('HardWare Created successfully')
    })
};

// READ ----------------------------------------------------------------------------

const Hardware = require('../models/models.js');

// Find a single hardware with an id
exports.findOne = (req, res) => {
    Hardware.findById(req.params.id)
   .then(hardware => {
       if(!hardware) {
           return res.status(404).send({
               message: "Hardware not found with id " + req.params.id
           });
       }
       res.send(hardware);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Hardware not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving hardware with id " + req.params.id
       });
   });
};

// UPDATE ----------------------------------------------------------------------------

// Hardware Update
exports.hardware_update = function (req, res) {
    Hardware.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, hardware) {
        if (err) return next(err);
        res.send('Hardware udpated.');
    });
};
