const mongoose = require('mongoose')
const Schema = mongoose.Schema

const potentialShowSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: String,
    email: {
        type: String,
        required: true
    },
    emailBody: String,
    venue: String,
    location: String,
    time: String,
    date: {
        type: Date,
        required: true
    },
    type: String,
    // price: Number,
    url: String
})

module.exports = mongoose.model('PotentialShow', potentialShowSchema)