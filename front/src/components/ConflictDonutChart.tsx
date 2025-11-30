import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ConflictDonutChartProps {
  support: number;
  oppose: number;
  neutral: number;
}

export function ConflictDonutChart({ support, oppose, neutral }: ConflictDonutChartProps) {
  const data = {
    labels: ['찬성 (Support)', '반대 (Oppose)', '중립 (Neutral)'],
    datasets: [
      {
        label: '의견 수',
        data: [support, oppose, neutral],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)', // Blue for Support
          'rgba(255, 99, 132, 0.6)', // Red for Oppose
          'rgba(201, 203, 207, 0.6)', // Grey for Neutral
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(201, 203, 207, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: '여론 대립 구도 (Conflict Ratio)',
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.chart._metasets[context.datasetIndex].total;
            const percentage = Math.round((value / total) * 100) + '%';
            return `${label}: ${value}명 (${percentage})`;
          }
        }
      }
    },
  };

  return <Doughnut data={data} options={options} />;
}
