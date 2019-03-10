
// CREATE ----------------------------------------------------------------------------

// COMMENT
exports.comment_create = function (req, res) {
    let comment = new Comment(
        {
            //id : req.body.id,
            author : req.body.author,
            message : req.body.message,
            date : req.body.date
        }
    );

    comment.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Comment Created successfully')
    })
};

// READ ----------------------------------------------------------------------------

const Comment = require('../models/comment.models.js');

// Find a single comment with an id
exports.findOne = (req, res) => {
    Comment.findById(req.params.id)
   .then(comment => {
       if(!comment) {
           return res.status(404).send({
               message: "comment not found with id " + req.params.id
           });
       }
       res.send(comment);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Comment not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving comment with id " + req.params.id
       });
   });
};

// UPDATE ----------------------------------------------------------------------------

// Comment Update
exports.comment_update = function (req, res) {
    Comment.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, comment) {
        if (err) return next(err);
        res.send('Comment udpated.');
    });
};
