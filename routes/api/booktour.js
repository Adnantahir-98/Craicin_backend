const express = require('express')
const router = express.Router()
const tourBooking = require('../../models/BookTour')


// @desc        Register Booking
router.post('/', async (req, res) => {
    const booking = new tourBooking({
        title: req.body.title,
        adults: req.body.adults,
        childrens: req.body.childrens
    })
    try{
        const saveBookings = await booking.save()
        res.json(saveBookings)
    }catch(err){
        res.json({message: err})
    }
})


module.exports = router
