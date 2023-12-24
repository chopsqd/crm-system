const {Schema, model} = require('mongoose')

const Category = new Schema({
    name: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        default: ''
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = model('categories', Category)
