import React, { useState } from "react";

export default function Table({ data, columns }) {
  const [search, setSearch] = useState("");

  const filtered = data.filter(item =>
    Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        className="form-control mb-3"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-bordered">
        <thead>
          <tr>
            {columns.map((c) => <th key={c}>{c}</th>)}
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((row) => (
            <tr key={row.id}>
              {columns.map((c) => <td key={c}>{row[c]}</td>)}
              <td>
                <button className="btn btn-warning btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}