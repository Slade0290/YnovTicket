
module.exports = (app) => {
    const ticket = require('../controllers/ticket.controllers.js');

    // Create Ticket
    app.post('/ticket', ticket.ticket_create);

    //Read Ticket
    app.get('/ticket/:id', ticket.findOne);

    // Update Ticket
    app.put('/:id/update', ticket.ticket_update);

}
