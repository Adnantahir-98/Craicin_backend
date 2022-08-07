const mongoose = require('mongoose')

const BookingTourSchema = new mongoose.Schema({
    firstName:{
        type: String,
        require: true,
    },
    lastName: {
        type: String
    },
    email:{
        type: String,
        require: true,
    },
    country:{
        type: String
    },
    mobile:{
        type: String,
        require: true,
    },
    adults:[{
        type: String
    }],
    students:[{
        type: String
    }],
    serniors:[{
        type: String
    }],
    Childrens:[{
        type: String
    }],
    Disability:{
        type: String,
    },
    emailUpdates:{
        type: false
    }
},{timestamps: true})

module.exports = mongoose.model('bookingTourDetails', BookingTourSchema)
