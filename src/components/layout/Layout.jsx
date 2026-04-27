import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="d-flex">

      <Sidebar />

      <div className="main-content w-100">
        <Navbar />

        <div className="p-4">
          <Outlet />
        </div>
      </div>

    </div>
  );
}