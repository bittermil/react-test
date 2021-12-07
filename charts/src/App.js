import './App.css';
import React from 'react';
import { Chart as ChartJS, ArcElement, Legend, Tooltip, } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Legend, Tooltip);

export const tasksChart = {
  labels: ['Мария', 'Петр', 'Светлана', 'Игорь', 'Анастасия', 'Егор', 'Андрей', 'Виктория'],
  datasets: [
    {
      label: '# of Tasks',
      data: [12, 19, 3, 5, 2, 3, 7, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 161, 68, 0.2)',
        'rgba(165, 38, 17, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 161, 68, 1)',
        'rgba(165, 38, 17, 1)'
      ],
      borderWidth: 1,
    },
  ],
};


export function App() {
  return (
    <div className="App">
      <h1 className="Title">Задачи команды</h1>
      <Pie data={tasksChart} />
    </div>
  );
}

export default App;
