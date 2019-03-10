
module.exports = (app) => {
    const user = require('../controllers/user.controllers.js');

    // Create User
    app.post('/user', user.user_create);

    //Read User
    app.get('/user/:id', user.findOne);
    app.get('/users', user.findAll);

    // Update User
    app.put('/user/:id', user.user_update);

}
