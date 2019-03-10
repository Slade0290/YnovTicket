
module.exports = (app) => {
    const hardware = require('../controllers/hardware.controllers.js');

    // Create Hardware
    app.post('/hardware', hardware.hardware_create);

    //Read Hardware
    app.get('/hardware/:id', hardware.findOne);

    // Update Hardware
    app.put('/hardware/:id', hardware.hardware_update);

}
