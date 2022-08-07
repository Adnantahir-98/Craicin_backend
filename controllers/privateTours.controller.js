
const contactUsModel = require("../models/PrivateTours.model");

exports.getAllPrivateTours = async (req, res) => {
    try {
        const privateTours = await contactUsModel.find();
        res.json(privateTours);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.getPrivateTours = async (req, res) => {
    try {
        const privateTours = await contactUsModel.findById(req.params.id);
        res.json(privateTours);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.createPrivateTours = async (req, res) => {
    try {
        const newPrivateTours = new contactUsModel(req.body);

        const privateTours = await newPrivateTours.save();
        res.json(privateTours);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.updatePrivateTours = async (req, res) => {
    try {
        const privateTours = await contactUsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(privateTours);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.deletePrivateTours = async (req, res) => {
    try {
        const privateTours = await contactUsModel.findByIdAndDelete(req.params.id);
        res.json(privateTours);

    } catch (err) {
        res.json({ message: err });
    }
}

module.exports = exports;