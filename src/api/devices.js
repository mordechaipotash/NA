// Full path: /Users/mordechai/nectoApp/src/api/devices.js

const express = require('express');
const router = express.Router();
const Device = require('../models/Device');

// @route   GET /api/devices
// @desc    Get all devices
router.get('/', async (req, res) => {
    try {
        const devices = await Device.find();
        res.json(devices);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   POST /api/devices
// @desc    Add a new device
router.post('/', async (req, res) => {
    const { name, type } = req.body;

    const newDevice = new Device({
        name,
        type
    });

    try {
        const device = await newDevice.save();
        res.status(201).json(device);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
