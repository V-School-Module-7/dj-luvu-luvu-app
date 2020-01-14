const mongoose = require('mongoose')
const Schema = mongoose.Schema

const showSchema = new Schema({
    name: String,
    venue: String,
    location: String,
    time: String,
    date: Date, 
    price: Number
})

module.exports = mongoose.model('Show', showSchema)