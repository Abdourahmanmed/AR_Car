import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cars from "./pages/car";
import AdminLayout from "./admin/layout/AdminLayout";
import AdminLoginPage from "./admin/pages/AdminLoginPage";
import DashboardPage from "./admin/pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
