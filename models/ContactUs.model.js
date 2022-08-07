const mongoose = require('mongoose')


const ContactUsSchema = new mongoose.Schema({
    fullName:{
        type: String
    },
    email:{
        type: String,
        require: true
    },
    message:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ContactUs', ContactUsSchema)
