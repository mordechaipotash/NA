// Full path: /Users/mordechai/nectoApp/src/models/Measurement.js

const mongoose = require('mongoose');

const MeasurementSchema = new mongoose.Schema({
    deviceId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Device'
    },
    value: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Measurement', MeasurementSchema);
