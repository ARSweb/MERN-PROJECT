const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
require('dotenv').config()

connectDB()

const app = express()

app.use(cors())

// body parser

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/travel', require('./routes/travelRoutes'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server listening on port: ${PORT}`))