const mongoose = require('mongoose')


const PriavteTourBookingSchema = new mongoose.Schema({
    emailAdress:{
        type: String
    },
    yourname:{
        type: String,
    },
    numberofAdults:{
        type:  Number
    },
    numberofChildrens:{
        type: Number
    },
    startPoint:{
        type: String
    },
    finishPoint:{
        type: String
    },
    startDate: {
        type: String
    },
    finishDate: {
        type: String
    },
    Describe:{
        type: String
    },
    createdAt: {
        type: String
    }

})


module.exports = mongoose.model('PrivateTourBooking', PriavteTourBookingSchema)
