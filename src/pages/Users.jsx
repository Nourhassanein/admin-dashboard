import { useState } from "react";
import { users } from "../data/users";

export default function Users() {
  const [search, setSearch] = useState("");

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <div>
          <h6 className="text-muted mb-1">Customers / Users</h6>
          <h3 className="fw-bold">Users List</h3>
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
                <th>UserID</th>
                <th>Customer</th>
                <th>Join Date / Status</th>
                <th>Orders (Count)</th>
                <th className="text-end">Total Spent</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((u, i) => (
                <tr key={i} className="border-top">

                  {}
                  <td>
                    <div className="fw-bold">{u.id}</div>
                    <small className="text-primary cursor-pointer">
                      View Details
                    </small>
                  </td>

                  {}
                  <td>{u.name}</td>

                  {}
                  <td>
                    <div>{u.joinDate}</div>
                    <span
                      className={`badge ${
                        u.status === "Active"
                          ? "bg-success"
                          : "bg-secondary"
                      }`}
                    >
                      {u.status}
                    </span>
                  </td>

                  {}
                  <td>{u.orders}</td>

                  {}
                  <td className="text-end fw-bold">
                    ${u.total}
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