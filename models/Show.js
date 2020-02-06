const mongoose = require('mongoose')
const Schema = mongoose.Schema

const showSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: String,
    email: {
        type: String,
        required: true
    },
    venue: String,
    location: String,
    time: String,
    date: {
        type: Date,
        required: true
    },
    // price: Number,
    url: String
})

module.exports = mongoose.model('Show', showSchema)