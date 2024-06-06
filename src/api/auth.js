// Full path: /Users/mordechai/nectoApp/src/api/auth.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// @route   POST /api/auth/register
// @desc    Register a new user
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = new User({ name, email, password: await bcrypt.hash(password, 10) });
        await user.save();

        const token = jwt.sign({ user: { id: user._id } }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(201).json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   POST /api/auth/login
// @desc    Authenticate user and get token
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ user: { id: user._id } }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
