import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";

import { Bar, Doughnut } from "react-chartjs-2";

import {
  chartOptions,
  barDatasetStyle,
  doughnutDatasetStyle
} from "../utils/chartStyles";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);

export default function Analytics() {

  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [1200, 1900, 800, 1700, 2200],
        ...barDatasetStyle
      }
    ]
  };

  const categoryData = {
    labels: ["Smart Glasses", "Accessories", "Other"],
    datasets: [
      {
        data: [60, 25, 15],
        ...doughnutDatasetStyle
      }
    ]
  };

  return (
    <div>

      <div className="mb-3">
        <h3>📈 Analytics Dashboard</h3>
        <p className="text-muted">Overview of performance</p>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-3"><div className="card p-3">💰 Revenue<br /><b>$8,200</b></div></div>
        <div className="col-md-3"><div className="card p-3">📦 Orders<br /><b>120</b></div></div>
        <div className="col-md-3"><div className="card p-3">👤 Users<br /><b>75</b></div></div>
        <div className="col-md-3"><div className="card p-3">⭐ Rating<br /><b>4.8</b></div></div>
      </div>

      <div className="row g-3">

        <div className="col-md-8">
          <div className="card p-3">
            <h5>Sales Overview</h5>
            <Bar data={salesData} options={chartOptions} />
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Category Distribution</h5>
            <Doughnut data={categoryData} options={chartOptions} />
          </div>
        </div>

      </div>

    </div>
  );
}