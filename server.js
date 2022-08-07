const express = require('express')
const connectDB = require('./config/db')
const Booktour = require('./routes/api/booktour.route')
const ContactUs = require('./routes/api/contactUs.route')
const BookingTourDetails = require('./routes/api/bookingTourDetails.route')
const PrivateTours = require('./routes/api/privateTours.route')
const app = express()
const cors = require('cors')
// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false}))
app.use(cors())

// Routes
app.get('/', (req, res) => res.send('API Running, Home Page'))
app.use('/api', Booktour)
app.use('/api', ContactUs)
app.use('/api', BookingTourDetails)
app.use('/api', PrivateTours)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started on ${PORT}`))
