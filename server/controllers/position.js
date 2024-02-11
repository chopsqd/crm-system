const Position = require('../models/Position')
const errorHandler = require("../utils/errorHandler");

module.exports.getByCategoryId = async function (req, res) {
    try {
        const positions = await Position.find({
            category: req.params.id,
            user: req.user.id
        })

        return res.status(200).json(positions)
    } catch(error) {
        errorHandler(res, error)
    }
}

module.exports.create = async function (req, res) {
    try {
        const {name, cost, category} = req.body

        const position = new Position({
            name, cost, category, user: req.user.id
        })

        await position.save()

        return res.status(201).json(position)
    } catch(error) {
        errorHandler(res, error)
    }
}

module.exports.remove = async function (req, res) {
    try {
        await Position.deleteOne({_id: req.params.id})

        return res.status(200).json({message: 'Позиция была удалена'})
    } catch(error) {
        errorHandler(res, error)
    }
}

module.exports.update = async function (req, res) {
    try {
        const position = await Position.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        )

        return res.status(200).json(position)
    } catch(error) {
        errorHandler(res, error)
    }
}
