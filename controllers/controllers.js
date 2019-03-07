
// CREATE ----------------------------------------------------------------------------

const Ticket = require('../models/models.js');

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
