
module.exports = (app) => {
    const ticket = require('../controllers/ticket.controllers.js');

    // Create Ticket
    app.post('/ticket', ticket.ticket_create);

    //Read Ticket
    app.get('/ticket/:id', ticket.findOne);
    app.get('/tickets',ticket.findAll)

    // Update Ticket
    app.put('/ticket/:id', ticket.ticket_update);

}
