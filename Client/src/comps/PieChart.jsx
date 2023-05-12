import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { ArcElement } from 'chart.js';
Chart.register(ArcElement);

const PieChart = ({ dataArr }) => {
  const data = {
    labels: ['asdadadad', 'asdadadada', 'adasdasdasdsad', 'adadasdasd', 'adadasd'],
    datasets: [
      {
        data: dataArr,
        backgroundColor: ['#0D3559', '#175D9C', '#2185DE', '#63A9E8', '#A6CEF2'],
        hoverBackgroundColor: ['#36A2EB'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
