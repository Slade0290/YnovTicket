
module.exports = (app) => {
    const user = require('../controllers/user.controllers.js');

    // Create User
    app.post('/user', user.user_create);

    //Read User
    app.get('/user/:id', user.findOne);

    // Update User
    app.put('/:id/update', user.user_update);

}
