const express = require('express')
const router = express.Router()
const {getAllContactUs, getContactUs, createContactUs, updateContactUs, deleteContactUs } = require('../../controllers/contactUs.controller');


router.get('/', (req, res) => {
    res.send('API Running, Home Page')
})

router.get('/contactus', getAllContactUs )

router.get('/contactus/:id', getContactUs)

router.post('/contactus', createContactUs )

router.put('/contactus/:id', updateContactUs )

router.delete('/contactus/:id', deleteContactUs )


module.exports = router

// Compare this snippet from routes\api\booktour.route.js: