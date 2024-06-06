// Full path: /Users/mordechai/nectoApp/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./src/api/auth');
const deviceRoutes = require('./src/api/devices');
const measurementRoutes = require('./src/api/measurements');

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const uri = "mongodb+srv://mordechaipotash:fEKOOKGVX9DNKNiM@necto.dhathcn.mongodb.net/?retryWrites=true&w=majority&appName=Necto";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Mongoose connected successfully');
}).catch((err) => {
    console.error('Mongoose connection error: ', err);
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/devices', deviceRoutes);
app.use('/api/measurements', measurementRoutes);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')));

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
