// Full path: /Users/mordechai/nectoApp/src/models/Device.js

const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Device', DeviceSchema);
