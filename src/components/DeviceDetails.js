import React, { useEffect, useState } from 'react';
import axios from '../../src/api/axiosConfig';
import { useParams } from 'react-router-dom';

const DeviceDetails = () => {
  const { id } = useParams();
  const [device, setDevice] = useState(null);

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const response = await axios.get(`/devices/${id}`);
        setDevice(response.data);
      } catch (error) {
        console.error('Failed to fetch device details', error);
      }
    };

    fetchDevice();
  }, [id]);

  if (!device) return <div>Loading...</div>;

  return (
    <div>
      <h1>{device.location}</h1>
      <p>Status: {device.status}</p>
      <p>Temperature Threshold: {device.high_temp_threshold} - {device.low_temp_threshold}</p>
      <p>Humidity Threshold: {device.high_humidity_threshold} - {device.low_humidity_threshold}</p>
      <p>Latitude: {device.latitude}</p>
      <p>Longitude: {device.longitude}</p>
    </div>
  );
};

export default DeviceDetails;
