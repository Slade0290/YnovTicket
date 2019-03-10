
// CREATE ----------------------------------------------------------------------------

// Create Ticket
app.post('/tickets', ticket.create);

// Create User
app.post('/users', user.create);

// Create Hardware
app.post('/hards', hard.create);

// Create Software
app.post('/softs', soft.create);

// READ ----------------------------------------------------------------------------

module.exports = (app) => {
    const ticket = require('../controllers/ticket.controllers.js');
    //read a ticket
    app.get('/ticket/:id', ticket.findOne);

    const user = require('../controllers/user.controllers.js');
    //read user
    app.get('/user/:id', user.findOne);

    const comment = require('../controllers/comment.controllers.js');
    //read a comment
    app.get('/comment/:id', comment.findOne);

    const hardware = require('../controllers/hardware.controllers.js');
    //read hardware
    app.get('/hardware/:id', hardware.findOne);

    const software = require('../controllers/software.controllers.js');
    //read software
    app.get('/software/:id', software.findOne);
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
