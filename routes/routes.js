<<<<<<< HEAD
module.exports = (app) => {
    const ticket = require('../controllers/controllers.js');
    //read a ticket
    app.get('/ticket/:id', ticket.findOne);

    const user = require('../controllers/controllers.js');
    //read user
    app.get('/user/:id', user.findOne);

    const comment = require('../controllers/controllers.js');
    //read a comment
    app.get('/user/:id', comment.findOne);

    const hardware = require('../controllers/controllers.js');
    //read hardware
    app.get('/user/:id', hardware.findOne);

    const software = require('../controllers/controllers.js');
    //read software
    app.get('/user/:id', software.findOne);
}
=======
// Create Ticket

// Create a new client
    app.post('/tickets', ticket.create);
>>>>>>> ccce9b464fb36b92896f1f0200146410e24c91e5
