import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const Charts = ({ expenses }) => {
  const data = {
    labels: ['Food', 'Transport', 'Entertainment', 'Other'],
    datasets: [
      {
        label: 'Expenses',
        data: [
          expenses
            .filter((exp) => exp.category === 'Food')
            .reduce((sum, exp) => sum + exp.amount, 0),
          expenses
            .filter((exp) => exp.category === 'Transport')
            .reduce((sum, exp) => sum + exp.amount, 0),
          expenses
            .filter((exp) => exp.category === 'Entertainment')
            .reduce((sum, exp) => sum + exp.amount, 0),
          expenses
            .filter((exp) => exp.category === 'Other')
            .reduce((sum, exp) => sum + exp.amount, 0),
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div>
      <h3>Expense Categories</h3>
      <Bar data={data} />
    </div>
  )
}

export default Charts
