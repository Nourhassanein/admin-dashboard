import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement);

export default function Dashboard() {

  const data = {
    labels: ["1", "5", "10", "15", "20", "25", "30"],
    datasets: [
      {
        label: "Sales",
        data: [500, 800, 1200, 900, 1500, 1800, 2000],
        backgroundColor: "#3b82f6"
      }
    ]
  };

  return (
    <div>

      <h3 className="mb-4">Dashboard Overview</h3>

      {}
      <div className="row g-3">

        <div className="col-md-3">
          <div className="card stat-box">
            <p>Total revenue</p>
            <h4>$30,637</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card stat-box">
            <p>Total orders</p>
            <h4>238</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card stat-box">
            <p>New users</p>
            <h4>35</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card stat-box">
            <p>Stock level</p>
            <h4>200</h4>
          </div>
        </div>

      </div>

      {}
      <div className="row mt-4">

        {}
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Recent Activity</h5>
            <p>📦 Order placed</p>
            <p>👤 New user</p>
            <p>🛒 Product updated</p>
          </div>
        </div>

        {}
        <div className="col-md-8">
          <div className="card p-3">
            <h5>Sales Performance</h5>
            <Bar data={data} />
          </div>
        </div>

      </div>

    </div>
  );
}