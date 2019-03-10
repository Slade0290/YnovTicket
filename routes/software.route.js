
module.exports = (app) => {
    const software = require('../controllers/software.controllers.js');

    // Create Software
    app.post('/software', software.software_create);

    //Read Software
    app.get('/software/:id', software.findOne);

    // Update Software
    app.put('/:id/update', software.software_update);

}
