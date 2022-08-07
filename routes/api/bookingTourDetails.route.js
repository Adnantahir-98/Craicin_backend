const express = require('express')
const router = express.Router()
const {getAllBookingTourDetails, getBookingTourDetails, createBookingTourDetails, updateBookingTourDetails, deleteBookingTourDetails } = require('../../controllers/bookingTourDetails.controller');


router.get('/', (req, res) => {
    res.send('API Running, Home Page')
} )

router.get('/contactus', getAllBookingTourDetails )

router.get('/contactus/:id', getBookingTourDetails)

router.post('/contactus', createBookingTourDetails )

router.put('/contactus/:id', updateBookingTourDetails )

router.delete('/contactus/:id', deleteBookingTourDetails )


module.exports = router
