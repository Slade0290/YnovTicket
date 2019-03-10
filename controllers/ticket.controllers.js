
const Ticket = require('../models/ticket.models.js');

// CREATE ----------------------------------------------------------------------------

// TICKET
exports.ticket_create = function (req, res) {
    let ticket = new Ticket(
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

// READ ----------------------------------------------------------------------------

// Find a single ticket with an id
exports.findOne = (req, res) => {
    Ticket.findById(req.params.id)
   .then(ticket => {
       if(!ticket) {
           return res.status(404).send({
               message: "Ticket not found with id " + req.params.id
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

// UPDATE ----------------------------------------------------------------------------

// Ticket Update
exports.ticket_update = function (req, res) {
    Ticket.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, ticket) {
        if (err) return next(err);
        res.send('Ticket udpated.');
    });
};
