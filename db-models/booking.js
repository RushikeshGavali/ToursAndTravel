const mongoose = require("mongoose");
const BookingSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    adults: {
        type: Number,
        required: true,
    },
    children: {
        type: Number,
        required: true,
    },
    charges: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
