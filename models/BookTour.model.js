const mongoose = require('mongoose')


const BookingTourSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    adults: {
        type: Number,
        require: true,
        max: 10,
    },
    childrens: {
        type: Number,
        max: 10,
    },
    seniors: {
        type: Number,
        require: true,
        max: 10,
    },
    students: {
        type: Number,
        max: 10,
    },
    leavingOn:{
        type: String,
    },
    tourdate:{
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    cost:{
        type: String,
    },
    image: {
        type: String,
    }
})


module.exports = mongoose.model('tourbooking', BookingTourSchema)
