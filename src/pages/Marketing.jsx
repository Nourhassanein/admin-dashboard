import { useState } from "react";
import { showToast } from "../utils/toast";

export default function Marketing() {

  const [campaigns, setCampaigns] = useState([
    { id: 1, name: "Summer Sale", status: "Active", clicks: 120 },
    { id: 2, name: "New Launch", status: "Planned", clicks: 0 },
    { id: 3, name: "Black Friday", status: "Active", clicks: 430 },
    { id: 4, name: "Holiday Deals", status: "Paused", clicks: 210 }
  ]);

  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    name: "",
    status: "Planned"
  });

  
  const addCampaign = (e) => {
    e.preventDefault();

    if (!form.name) {
      showToast("Campaign name required ⚠️", "warning");
      return;
    }

    const newCampaign = {
      id: Date.now(),
      name: form.name,
      status: form.status,
      clicks: 0
    };

    setCampaigns([...campaigns, newCampaign]);
    showToast("Campaign created ✅", "success");

    setShow(false);
    setForm({ name: "", status: "Planned" });
  };

  
  const del = (id) => {
    if (window.confirm("Delete this campaign?")) {
      setCampaigns(campaigns.filter(c => c.id !== id));
      showToast("Campaign deleted 🗑️", "error");
    }
  };

  
  const toggleStatus = (id) => {
    setCampaigns(campaigns.map(c =>
      c.id === id
        ? { ...c, status: c.status === "Active" ? "Paused" : "Active" }
        : c
    ));
    showToast("Status updated 🔄", "info");
  };

  return (
    <div>

      {}
      <div className="d-flex justify-content-between mb-3 flex-wrap gap-2">
        <div>
          <h3>📢 Marketing</h3>
          <p className="text-muted">Campaign management</p>
        </div>

        <button className="btn btn-primary" onClick={() => setShow(true)}>
          + New Campaign
        </button>
      </div>

      {}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card p-3">
            📊 Campaigns <br /><b>{campaigns.length}</b>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            👁 Views <br /><b>3,200</b>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            🖱 Clicks <br />
            <b>{campaigns.reduce((a, b) => a + b.clicks, 0)}</b>
          </div>
        </div>
      </div>

      {}
      <div className="card p-3 shadow-sm">
        <h5 className="mb-3">Campaigns</h5>

        <table className="table align-middle">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Clicks</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {campaigns.map(c => (
              <tr key={c.id}>
                <td className="fw-semibold">{c.name}</td>

                <td>
                  <span className={`badge ${
                    c.status === "Active"
                      ? "bg-success"
                      : c.status === "Paused"
                      ? "bg-warning"
                      : "bg-secondary"
                  }`}>
                    {c.status}
                  </span>
                </td>

                <td>{c.clicks}</td>

                <td>
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => toggleStatus(c.id)}
                  >
                    Toggle
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => del(c.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {}
      {show && (
        <div className="modal d-block">
          <div className="modal-dialog">
            <div className="modal-content p-3">

              <h5>Create Campaign</h5>

              <form onSubmit={addCampaign}>

                <input
                  className="form-control mb-2"
                  placeholder="Campaign Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <select
                  className="form-control mb-3"
                  value={form.status}
                  onChange={(e) =>
                    setForm({ ...form, status: e.target.value })
                  }
                >
                  <option>Planned</option>
                  <option>Active</option>
                  <option>Paused</option>
                </select>

                <button className="btn btn-primary w-100">
                  Create
                </button>

              </form>

              <button
                className="btn btn-secondary mt-2"
                onClick={() => setShow(false)}
              >
                Cancel
              </button>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}