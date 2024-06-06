import React, { useEffect, useState } from 'react';
import axios from '../../src/api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-zoom';

const MeasurementGraph = () => {
  const { id } = useParams();
  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    const fetchMeasurements = async () => {
      try {
        const response = await axios.get(`/measurements/${id}`);
        setMeasurements(response.data);
      } catch (error) {
        console.error('Failed to fetch measurements', error);
      }
    };

    fetchMeasurements();
  }, [id]);

  const data = {
    labels: measurements.map((m) => new Date(m.timestamp).toLocaleString()),
    datasets: [
      {
        label: 'Temperature',
        data: measurements.map((m) => m.temperature),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Humidity',
        data: measurements.map((m) => m.humidity),
        borderColor: 'rgba(153,102,255,1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h1>Measurements</h1>
      <Line data={data} />
    </div>
  );
};

export default MeasurementGraph;
