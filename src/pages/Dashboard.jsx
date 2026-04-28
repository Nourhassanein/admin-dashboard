import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { barDatasetStyle, chartOptions } from "../utils/chartStyles";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function Dashboard() {

  const data = {
    labels: ["1", "5", "10", "15", "20", "25", "30"],
    datasets: [
      {
        label: "Sales",
        data: [500, 800, 1200, 900, 1500, 1800, 2000],
        ...barDatasetStyle
      }
    ]
  };

  return (
    <div>
      <h3 className="mb-4">Dashboard Overview</h3>

      <div className="row g-3">
        <div className="col-md-3"><div className="card p-3">Revenue <h4>$30,637</h4></div></div>
        <div className="col-md-3"><div className="card p-3">Orders <h4>238</h4></div></div>
        <div className="col-md-3"><div className="card p-3">Users <h4>35</h4></div></div>
        <div className="col-md-3"><div className="card p-3">Stock <h4>200</h4></div></div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8">
          <div className="card p-3">
            <h5>Sales Performance</h5>
            <Bar data={data} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
