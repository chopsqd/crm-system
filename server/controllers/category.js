const Category = require('../models/Category')
const Position = require('../models/Position')
const errorHandler = require("../utils/errorHandler");

module.exports.getAll = async function (req, res) {
    try {
        const categories = await Category.find({user: req.user.id})

        return res.status(200).json(categories)
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.getById = async function (req, res) {
    try {
        const category = await Category.findById(req.params.id)

        return res.status(200).json(category)
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.remove = async function (req, res) {
    try {
        await Category.remove({_id: req.params.id})
        await Position.remove({category: req.params.id})

        return res.status(200).json({message: 'Категория была удалена'})
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.create = async function (req, res) {
    try {

    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.update = async function (req, res) {
    try {

    } catch (error) {
        errorHandler(res, error)
    }
}
