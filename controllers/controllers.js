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

// Find a single wcomment with an id
exports.findOne = (req, res) => {
    Wcomment.findById(req.params.id)
   .then(wcomment => {
       if(!wcomment) {
           return res.status(404).send({
               message: "wcomment not found with id " + req.params.id
           });
       }
       res.send(wcomment);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Wcomment not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving wcomment with id " + req.params.id
       });
   });
};

const Software = require('../models/models.js');

// Find a single wcomment with an id
exports.findOne = (req, res) => {
    Wcomment.findById(req.params.id)
   .then(wcomment => {
       if(!wcomment) {
           return res.status(404).send({
               message: "wcomment not found with id " + req.params.id
           });
       }
       res.send(wcomment);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Wcomment not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving wcomment with id " + req.params.id
       });
   });
};
