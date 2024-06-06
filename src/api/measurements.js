// Full path: /Users/mordechai/nectoApp/src/api/measurements.js

const express = require('express');
const router = express.Router();
const Measurement = require('../models/Measurement');

// @route   GET /api/measurements
// @desc    Get all measurements
router.get('/', async (req, res) => {
    try {
        const measurements = await Measurement.find();
        res.json(measurements);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   GET /api/measurements/:deviceId
// @desc    Get measurements by device ID
router.get('/:deviceId', async (req, res) => {
    try {
        const measurements = await Measurement.find({ deviceId: req.params.deviceId });
        res.json(measurements);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   POST /api/measurements
// @desc    Add a new measurement
router.post('/', async (req, res) => {
    const { deviceId, value, humidity, temperature } = req.body;

    const newMeasurement = new Measurement({
        deviceId,
        value,
        humidity,
        temperature
    });

    try {
        const measurement = await newMeasurement.save();
        res.status(201).json(measurement);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
