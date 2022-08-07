
const bookingTourDetails = require("../models/bookingTourDetails.model");

exports.getAllBookingTourDetails = async (req, res) => {
    try {
        const bookingTourDetails = await bookingTourDetails.find();
        res.json(bookingTourDetails);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.getBookingTourDetails = async (req, res) => {
    try {
        const bookingTourDetails = await bookingTourDetails.findById(req.params.id);
        res.json(bookingTourDetails);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.createBookingTourDetails = async (req, res) => {
    try {
        const newBookingTourDetails = new bookingTourDetails(req.body);

        const bookingTourDetails = await newBookingTourDetails.save();
        res.json(bookingTourDetails);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.updateBookingTourDetails = async (req, res) => {
    try {
        const bookingTourDetails = await bookingTourDetails.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(bookingTourDetails);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.deleteBookingTourDetails = async (req, res) => {
    try {
        const bookingTourDetails = await bookingTourDetails.findByIdAndDelete(req.params.id);
        res.json(bookingTourDetails);

    } catch (err) {
        res.json({ message: err });
    }
}

module.exports = exports;
