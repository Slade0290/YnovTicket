
// CREATE ----------------------------------------------------------------------------

// TICKET
exports.ticket_create = function (req, res) {
    let ticket = new ticket(
        {
            id : req.body.id,
            title : req.body.title,
            description : req.body.description,
            type : req.body.type,
            dateCreation : req.body.dateCreation,
            lastUpdate : req.body.lastUpdate,
            priority : req.body.priority,
            status : req.body.status,
            author : req.body.author,
            supportName : req.body.supportName,
            comment : req.body.comment
        }
    );

    ticket.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Ticket Created successfully')
    })
};

// COMMENT
exports.comment_create = function (req, res) {
    let comment = new comment(
        {
            id : req.body.id,
            author : req.body.author,
            message : req.body.message,
            date : req.bodydate
        }
    );

    comment.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Comment Created successfully')
    })
};

// USER
exports.user_create = function (req, res) {
    let user = new user(
        {
            id : req.body.id,
            userType : req.body.userType,
            admin : req.body.admin,
            fname : req.body.fname,
            lname : req.body.lname,
            email : req.body.email,
            department : req.body.department,
            company : req.body.company,
            endContract : req.body.endContract
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
            id : req.body.id,
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
const Ticket = require('../models/models.js');

// Find a single ticket with an id
exports.findOne = (req, res) => {
    Ticket.findById(req.params.id)
   .then(ticket => {
       if(!ticket) {
           return res.status(404).send({
               message: "Comment not found with id " + req.params.id
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
