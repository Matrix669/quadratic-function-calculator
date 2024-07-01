// FunctionChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

const generateData = (a, b, c, range = 5) => {
  const data = [];
  for (let x = -range; x <= range; x += 0.1) {
    const y = a * x * x + b * x + c;
    data.push({ x, y });
  }
  return data;
};

export function XYChart ({ a, b, c }) {
  const data = {
    datasets: [
      {
        label: `Wykres funkcji`,
        data: generateData(a, b, c),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        pointRadius: 0,
        showLine: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        grid: {
          zeroLineColor: '#fff',
          zeroLineWidth: 1,
          color: (context) => context.tick.value === 0 ? '#fff' : 'rgba(0,0,0,0.1)',
          borderDash: (context) => context.tick.value === 0 ? [] : [5, 5],
        },
      },
      y: {
        type: 'linear',
        grid: {
          zeroLineColor: '#fff',
          zeroLineWidth: 1,
          color: (context) => context.tick.value === 0 ? '#fff' : 'rgba(0,0,0,0.1)',
          borderDash: (context) => context.tick.value === 0 ? [] : [5, 5],
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

