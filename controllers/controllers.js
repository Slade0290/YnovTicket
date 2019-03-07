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
