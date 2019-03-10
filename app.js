const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const ticket = require('./routes/ticket.route');
const comment = require('./routes/comment.route');
const user = require('./routes/user.route');
const hardware = require('./routes/hardware.route');
const software = require('./routes/software.route');
app.use('/tickets', ticket);
app.use('/comments', comment);
app.use('/users', user);
app.use('/hardwares', hardware);
app.use('/softwares', software);

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Content-type','application/json');
    res.setHeader('Accept','application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin');
    next();
});

//connecting to the db
mongoose.connect('mongodb://pota:b3cticketsup@ds361085.mlab.com:61085/ticketsup', {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database');
    process.exit();
});


//listening to request
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
