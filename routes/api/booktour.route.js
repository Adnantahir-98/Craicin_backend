const express = require('express')
const router = express.Router()
const {getAllTours, getTour, createTour, updateTour, deleteTour } = require('../../controllers/booktour.controller');


router.get('/', (req, res) => {
    res.send('API Running, Home Page')
} )

router.get('/booktour', getAllTours )

router.get('/booktour/:id', getTour)

router.post('/booktour', createTour )

router.put('/booktour/:id', updateTour )

router.delete('/booktour/:id', deleteTour )


module.exports = router
