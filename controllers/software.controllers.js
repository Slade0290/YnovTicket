
const Software = require('../models/software.models.js');

// CREATE ----------------------------------------------------------------------------

// SOFTWARE
exports.software_create = function (req, res) {
    const soft = new Software(
        {
            software : req.body.software,
            licence : req.body.licence,
            supportAvailable : req.body.supportAvailable
        }
    );

    soft.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('SoftWare Created successfully')
    })
};

// READ ----------------------------------------------------------------------------

// Find all software
exports.findAll = (req, res) => {

    Software.find()
    .then(softwares => {
        res.send(softwares);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "softwares not found"
        });
    });
};

// Find a single software with an id
exports.findOne = (req, res) => {
    Software.findById(req.params.id)
   .then(software => {
       if(!software) {
           return res.status(404).send({
               message: "software not found with id " + req.params.id
           });
       }
       res.send(software);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Software not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving software with id " + req.params.id
       });
   });
};

// UPDATE ----------------------------------------------------------------------------

// Software Update
exports.software_update = function (req, res) {
    Software.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, software) {
        if (err) return next(err);
        res.send('Software udpated.');
      });
  };
