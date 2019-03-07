

// UPDATE

// Ticket Update
exports.ticket_update = function (req, res) {
    Ticket.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, ticket) {
        if (err) return next(err);
        res.send('Ticket udpated.');
    });
};

// Comment Update
exports.comment_update = function (req, res) {
    Comment.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, comment) {
        if (err) return next(err);
        res.send('Comment udpated.');
    });
};

// User Update
exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('User udpated.');
    });
};

// Hardware Update
exports.hardware_update = function (req, res) {
    Hardware.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, hardware) {
        if (err) return next(err);
        res.send('Hardware udpated.');
    });
};

// Software Update
exports.software_update = function (req, res) {
    Software.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, software) {
        if (err) return next(err);
        res.send('Software udpated.');
    });
};
