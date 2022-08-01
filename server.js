const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false}))

// Routes
app.get('/', (req, res) => res.send('API Running, Home Page'))
app.use('/booktour', require('./routes/api/booktour'))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started on ${PORT}`))
