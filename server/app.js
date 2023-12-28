const express = require('express')
const mongoose = require('mongoose')
const {MONGO_URI} = require('./config/keys')
const app = express()

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected!'))
    .catch(error => console.log('MongoDB connection  error: ', error))

const analyticsRouter = require('./routes/analytics')
const authRouter = require('./routes/auth')
const categoryRouter = require('./routes/category')
const orderRouter = require('./routes/order')
const positionRouter = require('./routes/position')

app.use(require('cors')())
app.use(require('morgan')('dev'))
app.use(express.json())

app.use('/api/analytics', analyticsRouter)
app.use('/api/auth', authRouter)
app.use('/api/category', categoryRouter)
app.use('/api/order', orderRouter)
app.use('/api/position', positionRouter)

module.exports = app
