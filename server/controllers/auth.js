const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../models/User')
const {JWT_KEY} = require("../config/keys");
const errorHandler = require("../utils/errorHandler");

module.exports.login = async function (req, res) {
    try {
        const {email, password} = req.body

        const user = await User.findOne({email})
        if (!user) {
            return res.status(404).json({message: "Пользователь не найден"})
        }

        const isPassValid = bcrypt.compareSync(password, user.password)
        if (!isPassValid) {
            return res.status(401).json({message: "Некорректные данные входа"})
        }

        const token = jwt.sign({userId: user._id}, JWT_KEY, {expiresIn: "1h"})

        return res.status(200).json({token: `Bearer ${token}`})
    } catch (error) {
        console.log('Error: ', error)
        errorHandler(res, error)
    }
}

module.exports.register = async function (req, res) {
    try {
        const {email, password} = req.body

        const candidate = await User.findOne({email})

        if(candidate) {
            return res.status(409).json({message: 'Такой email уже занят'})
        }

        const hashPassword = await bcrypt.hash(password, 7)
        const user = new User({email, password: hashPassword})
        await user.save()

        return res.status(201).json(user)
    } catch (error) {
        console.log('Error: ', error)
        errorHandler(res, error)
    }
}
