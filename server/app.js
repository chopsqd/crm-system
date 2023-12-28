const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const {MONGO_URI} = require('./config/keys')
const {analyticsRouter, authRouter, categoryRouter, orderRouter, positionRouter} = require("./routes");
const app = express()

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected!'))
    .catch(error => console.log('MongoDB connection  error: ', error))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('cors')())
app.use(require('morgan')('dev'))
app.use(express.json())

app.use('/api/analytics', analyticsRouter)
app.use('/api/auth', authRouter)
app.use('/api/category', categoryRouter)
app.use('/api/order', orderRouter)
app.use('/api/position', positionRouter)

module.exports = app
