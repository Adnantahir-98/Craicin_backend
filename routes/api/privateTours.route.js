const express = require('express')
const router = express.Router()
const { getAllPrivateTours, getPrivateTours, createPrivateTours, updatePrivateTours, deletePrivateTours} = require('../../controllers/privateTours.controller');

router.get('/', (req, res) => {
    res.send('API Running, Home Page')
} )

router.get('/privateTours', getAllPrivateTours )

router.get('/privateTours/:id', getPrivateTours)

router.post('/privateTours', createPrivateTours )

router.put('/privateTours/:id', updatePrivateTours )

router.delete('/privateTours/:id', deletePrivateTours )

module.exports = router;