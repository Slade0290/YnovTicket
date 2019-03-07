const TicketSchema = mongoose.Schema({
    // enterprise: String,
    // street: String,
    // city: String,
    // codepostal: Number,
    // name : String,
    // firstname: String,
    // phonenumber: Number,
    // email: String,
    // activities: String,
    // project: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Ticket', TicketSchema);