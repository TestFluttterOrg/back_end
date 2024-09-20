const mongoose = require("mongoose")
const Schema = mongoose.Schema

const coordSchema = new Schema({
    notes: {
        type: String,
        required: false,
    },
    lng: {
        type: String,
        required: true,
    },
    lat: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("coords", coordSchema)