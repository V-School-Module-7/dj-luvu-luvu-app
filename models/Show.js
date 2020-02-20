const mongoose = require('mongoose')
const Schema = mongoose.Schema

const showSchema = new Schema({
    name: {
        type: String,
        // required: true
    },
    phone: String,
    email: {
        type: String,
        // required: true
    },
    venue: String,
    location: String,
    time: String,
    date: {
        type: Date,
        required: true
    },
    type: String,
    // price: Number,
    url: String,
    hidden: Boolean
})

module.exports = mongoose.model('Show', showSchema)