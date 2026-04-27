import { useState } from "react";
import { orders } from "../data/orders";
import StatusBadge from "../components/ui/StatusBadge";

export default function Orders() {
  const [search, setSearch] = useState("");

  const filtered = orders.filter(o =>
    o.customer.toLowerCase().includes(search.toLowerCase()) ||
    o.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <div>
          <h6 className="text-muted mb-1">Orders / Order List</h6>
          <h3 className="fw-bold"> Order List</h3>
        </div>

        <div className="d-flex gap-2">
          <select className="form-select" style={{ width: 150 }}>
            <option>Date Range</option>
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>

          <input
            className="form-control"
            placeholder="Search Customer Name/ID"
            style={{ width: 220 }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {}
      <div className="card shadow-sm border-0">

        <div className="table-responsive">
          <table className="table align-middle mb-0">

            <thead className="bg-light">
              <tr>
                <th>OrderID</th>
                <th>Customer</th>
                <th>Date / Status</th>
                <th>Items</th>
                <th className="text-end">Total</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((o, i) => (
                <tr key={i} className="border-top">

                  {}
                  <td>
                    <div className="fw-bold">{o.id}</div>
                    <small className="text-primary cursor-pointer">
                      View Details
                    </small>
                  </td>

                  {}
                  <td>{o.customer}</td>

                  {/* DATE + STATUS */}
                  <td>
                    <div>{o.date}</div>
                    <StatusBadge status={o.status} />
                  </td>

                  {}
                  <td className="text-muted small">
                    {o.items}
                  </td>

                  {}
                  <td className="text-end fw-bold">
                    ${o.total}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>

    </div>
  );
}