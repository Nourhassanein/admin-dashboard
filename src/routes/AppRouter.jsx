import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Login from "../pages/Login";
import Analytics from "../pages/Analytics";
import Marketing from "../pages/Marketing";
import Settings from "../pages/Settings";
import Support from "../pages/Support";

export default function AppRouter() {
  return (
    <HashRouter>
     <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="marketing" element={<Marketing />} />
         <Route path="settings" element={<Settings />} />
         <Route path="support" element={<Support />} />
        </Route>

       </Routes>
      </HashRouter>
  );
}