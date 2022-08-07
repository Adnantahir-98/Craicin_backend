
const tourModel = require("../models/BookTour.model");


exports.getAllTours = async (req, res) => {
    try {
        const tours = await tourModel.find();
        res.json(tours);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.getTour = async (req, res) => {
    try {
        const tour = await tourModel.findById(req.params.id);
        res.json(tour);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.createTour = async (req, res) => {
    try {
        const newTour = new tourModel(req.body);

        const tour = await newTour.save();
        res.json(tour);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.updateTour = async (req, res) => {
    try {
        const tour = await tourModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(tour);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.deleteTour = async (req, res) => {
    try {
        const tour = await tourModel.findByIdAndDelete(req.params.id);
        res.json(tour);

    } catch (err) {
        res.json({ message: err });
    }
}
