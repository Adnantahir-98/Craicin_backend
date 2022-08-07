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
    }
},{timestamps: true})

module.exports = mongoose.model('ContactUs', ContactUsSchema)
