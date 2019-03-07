const Ticket = require('../models/models.js');

// Find a single ticket with an id
exports.findOne = (req, res) => {
    Ticket.findById(req.params.id)
   .then(ticket => {
       if(!ticket) {
           return res.status(404).send({
               message: "wcomment not found with id " + req.params.id
           });
       }
       res.send(ticket);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Ticket not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving ticket with id " + req.params.id
       });
   });
};

const User = require('../models/models.js');

// Find a single user with an id
exports.findOne = (req, res) => {
    User.findById(req.params.id)
   .then(user => {
       if(!user) {
           return res.status(404).send({
               message: "user not found with id " + req.params.id
           });
       }
       res.send(user);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "user not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving user with id " + req.params.id
       });
   });
};

const Comment = require('../models/models.js');

// Find a single comment with an id
exports.findOne = (req, res) => {
    Comment.findById(req.params.id)
   .then(comment => {
       if(!comment) {
           return res.status(404).send({
               message: "comment not found with id " + req.params.id
           });
       }
       res.send(comment);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Comment not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving comment with id " + req.params.id
       });
   });
};

const Hardware = require('../models/models.js');

// Find a single hardware with an id
exports.findOne = (req, res) => {
    Hardware.findById(req.params.id)
   .then(hardware => {
       if(!hardware) {
           return res.status(404).send({
               message: "hardware not found with id " + req.params.id
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

const Software = require('../models/models.js');

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
   
// Create and Save a new Ticket
exports.create = (req, res) => {
    // Validate request
    if(!req.body.enterprise) {
        return res.status(400).send({
            message: "ticket content can not be empty"
        });
    }
    // Create a ticket
    const ticket = new Ticket({
        // enterprise: req.body.enterprise || "Untitled Compagny",
        // street: req.body.street,
        // city: req.body.city,
        // codepostal: req.body.codepostal,
        // name: req.body.name,
        // firstname: req.body.firstname,
        // phonenumber: req.body.phonenumber,
        // email: req.body.email,
        // activities:req.body.activities,
        // project: req.body.project
    });
    // Save ticket in the database
    ticket.save()
    .then(data => {
        res.send(data);
        }).catch(err => {
            res.status(500).send({
            message: err.message || "Some error occurred while creating the ticket."
            });
        });
    };
};
