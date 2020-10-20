const mongoose = require('mongoose')
const { Schema } = mongoose


const planSchema = new Schema({
    planName: {
        type: String,
        required: true
    },
    totalPhase: {
        type: Number,
        required: true
    },
    durationOfEachPhase: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    phases: [
        {
            id: { type: String },
            phaseName: { type: String },
            phaseFocus: { type: String },
            duration: { type: String },
            reprange: {type: String}
        }
    ]
})


module.exports = mongoose.model('plan', planSchema)
