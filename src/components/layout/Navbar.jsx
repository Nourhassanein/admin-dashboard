import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [showNotif, setShowNotif] = useState(false);
  const navigate = useNavigate();

  
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.toLowerCase().includes("product")) {
      navigate("/products");
    } else if (value.toLowerCase().includes("order")) {
      navigate("/orders");
    } else if (value.toLowerCase().includes("user")) {
      navigate("/users");
    }
  };

  return (
    <div className="navbar-custom d-flex justify-content-between align-items-center px-4 py-2 shadow-sm position-relative">

      {}
      <input
        className="form-control w-50"
        placeholder="Search products, orders..."
        value={query}
        onChange={handleSearch}
      />

      <div className="d-flex align-items-center gap-3">

        {}
        <ThemeToggle />

        {}
        <div style={{ position: "relative" }}>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setShowNotif(!showNotif)}
          >
            🔔
          </span>

          {showNotif && (
            <div
              className="card shadow p-2"
              style={{
                position: "absolute",
                right: 0,
                top: 30,
                width: 250,
                zIndex: 1000
              }}
            >
              <small className="text-muted">Notifications</small>
              <hr />
              <div>📦 New order received</div>
              <div>🛒 Product stock low</div>
              <div>👤 New user registered</div>
            </div>
          )}
        </div>

        {}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/settings")}
        >
          ⚙️
        </span>

        {}
        <div>
          <small>Welcome,</small>
          <div><b>Admin</b></div>
        </div>

      </div>

    </div>
  );
}