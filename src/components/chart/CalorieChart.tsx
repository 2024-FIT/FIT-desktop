import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CalorieChart: React.FC = () => {
  const data = {
    labels: ['7/14', '7/15', '7/16', '7/17', '7/18', '7/19', '7/20'],
    datasets: [
      {
        label: '권장열량',
        data: [200, 195, 190, 185, 200, 195, 200],
        borderColor: 'rgba(210, 180, 140, 1)',
        backgroundColor: 'rgba(210, 180, 140, 0.2)',
        fill: false,
        tension: 0.1,
      },
      {
        label: '섭취열량',
        data: [210, 200, 195, 190, 205, 220, 210],
        borderColor: 'rgba(0, 128, 0, 1)',
        backgroundColor: 'rgba(0, 128, 0, 0.2)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '권장열량 vs 섭취열량',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default CalorieChart;