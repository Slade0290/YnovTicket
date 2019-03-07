

// CREATE ----------------------------------------------------------------------------

// Create Ticket
    app.post('/tickets', ticket.create);

// READ ----------------------------------------------------------------------------

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


// UPDATE ----------------------------------------------------------------------------

// Update Ticket
router.put('/:id/update', ticket_controller.ticket_update);

// Update Comment
router.put('/:id/update', comment_controller.comment_update);

// Update User
router.put('/:id/update', user_controller.user_update);

// Update Hardware
router.put('/:id/update', hardware_controller.hardware_update);

// Update Software
router.put('/:id/update', software_controller.software_update);
