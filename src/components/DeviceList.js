import React, { useEffect, useState } from 'react';
import axios from '../../src/api/axiosConfig';

const DeviceList = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get('/devices');
        setDevices(response.data);
      } catch (error) {
        console.error('Failed to fetch devices', error);
      }
    };

    fetchDevices();
  }, []);

  return (
    <div>
      <h1>Your Devices</h1>
      <ul>
        {devices.map((device) => (
          <li key={device._id}>
            {device.location} ({device.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceList;
