import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column">

      {}
      <h4 className="logo text-center py-3">OpticHub</h4>

      {}
      <div className="px-2">
        <p className="sidebar-title">MAIN</p>

        <NavLink to="/" className="nav-link">📊 Dashboard</NavLink>
        <NavLink to="/products" className="nav-link">🛒 Products</NavLink>
        <NavLink to="/orders" className="nav-link">📦 Orders</NavLink>
        <NavLink to="/users" className="nav-link">👤 Users</NavLink>
      </div>

      {}
      <div className="px-2 mt-3">
        <p className="sidebar-title">MANAGEMENT</p>

        <NavLink to="/analytics" className="nav-link">📈 Analytics</NavLink>
        <NavLink to="/marketing" className="nav-link">📢 Marketing</NavLink>
      </div>

      {}
      <div className="px-2 mt-3 mb-auto">
        <p className="sidebar-title">SYSTEM</p>

        <NavLink to="/settings" className="nav-link">⚙️ Settings</NavLink>
        <NavLink to="/support" className="nav-link">❓ Help & Support</NavLink>
      </div>

    </div>
  );
}