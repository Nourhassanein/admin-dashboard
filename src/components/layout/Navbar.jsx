import ThemeToggle from "../ui/ThemeToggle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <div className="navbar-custom d-flex justify-content-between px-4 shadow-sm">

      <input
        className="form-control w-50"
        placeholder="Search products, orders..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="d-flex align-items-center gap-3">

        <ThemeToggle />

        <span
          className="cursor-pointer"
          onClick={() => alert("No new notifications 🔔")}
        >
          🔔
        </span>

        <span
          className="cursor-pointer"
          onClick={() => navigate("/settings")}
        >
          ⚙️
        </span>

        <div>
          <small>Welcome,</small>
          <div><b>Admin</b></div>
        </div>

      </div>
    </div>
  );
}