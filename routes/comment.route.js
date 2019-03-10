
module.exports = (app) => {
    const comment = require('../controllers/comment.controllers.js');

    //Read all comment
    app.get('/comment', comment.findAll)

    // Create Comment
    app.post('/comment', comment.comment_create);

    //Read Comment
    app.get('/comment/:id', comment.findOne);

    // Update Comment
    app.put('/comment/:id', comment.comment_update);

}
