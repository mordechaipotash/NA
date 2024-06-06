import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import DeviceList from './DeviceList';
import DeviceDetails from './DeviceDetails';
import MeasurementGraph from './MeasurementGraph';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/devices" element={<DeviceList />} />
          <Route path="/devices/:id" element={<DeviceDetails />} />
          <Route path="/measurements" element={<MeasurementGraph />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
