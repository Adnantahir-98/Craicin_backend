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
    confirmEmail:{
        type: String
    },
    country:{
        type: String
    },
    mobile:{
        type: String,
        require: true,
    },
    adults:{
        type: Number,
        max: 10,
    },
    adultsFirstName:{
        type: String
    },
    adultsLastName:{
        type: String
    },
    students:{
        type: String,
        max: 10,
    },
    studentFirstName:{
        type: String
    },
    studentLastName:{
        type: String
    },
    serniors:{
        type: String,
        max: 10,
    },
    seniorsFirstName:{
        type: String
    },
    serniorLastName:{
        type: String
    },
    Childrens:{
        type: String,
        max: 10,
    },
    childrenFirstName:{
        type: String
    },
    childrenLastName:{
        type: String
    },
    Disability:{
        type: String,
    },
    emailUpdates:{
        type: false
    }
})

module.exports = mongoose.model('bookingTourDetails', BookingTourSchema)
