
const contactUsModel = require("../models/ContactUs.model");

exports.getAllContactUs = async (req, res) => {
    try {
        const contactUs = await contactUsModel.find();
        res.json(contactUs);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.getContactUs = async (req, res) => {
    try {
        const contactUs = await contactUsModel.findById(req.params.id);
        res.json(contactUs);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.createContactUs = async (req, res) => {
    try {
        const newContactUs = new contactUsModel(req.body);

        const contactUs = await newContactUs.save();
        res.json(contactUs);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.updateContactUs = async (req, res) => {
    try {
        const contactUs = await contactUsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(contactUs);
    } catch (err) {
        res.json({ message: err });
    }
}

exports.deleteContactUs = async (req, res) => {
    try {
        const contactUs = await contactUsModel.findByIdAndDelete(req.params.id);
        res.json(contactUs);

    } catch (err) {
        res.json({ message: err });
    }
}

module.exports = exports;

