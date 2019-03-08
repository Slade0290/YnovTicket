
// CREATE ----------------------------------------------------------------------------

// TICKET
exports.ticket_create = function (req, res) {
    let ticket = new ticket(
        {
            // name: req.body.name,
            // price: req.body.price
        }
    );

    ticket.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Ticket Created successfully')
    })
};


// USER
exports.user_create = function (req, res) {
    let user = new user(
        {
            // name: req.body.name,
            // price: req.body.price
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};


// HARDWARE
exports.hard_create = function (req, res) {
    let hard = new hard(
        {
            // name: req.body.name,
            // price: req.body.price
        }
    );

    hard.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('HardWare Created successfully')
    })
};

// SOFTWARE
exports.soft_create = function (req, res) {
    let soft = new soft(
        {
            // name: req.body.name,
            // price: req.body.price
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
};


// UPDATE ----------------------------------------------------------------------------

// Ticket Update
exports.ticket_update = function (req, res) {
    Ticket.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, ticket) {
        if (err) return next(err);
        res.send('Ticket udpated.');
    });
};

// Comment Update
exports.comment_update = function (req, res) {
    Comment.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, comment) {
        if (err) return next(err);
        res.send('Comment udpated.');
    });
};

// User Update
exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('User udpated.');
    });
};

// Hardware Update
exports.hardware_update = function (req, res) {
    Hardware.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, hardware) {
        if (err) return next(err);
        res.send('Hardware udpated.');
    });
};

// Software Update
exports.software_update = function (req, res) {
    Software.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, software) {
        if (err) return next(err);
        res.send('Software udpated.');
      });
  };
