
module.exports = (app) => {
    const software = require('../controllers/software.controllers.js');

    //Read all software
    app.get('/software' , software.findAll)

    // Create Software
    app.post('/software', software.software_create);

    //Read Software
    app.get('/software/:id', software.findOne);

    // Update Software
    app.put('/software/:id', software.software_update);

}
