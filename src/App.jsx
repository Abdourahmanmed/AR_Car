import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cars from "./pages/car";
import AdminLayout from "./admin/layout/AdminLayout";
import AdminLoginPage from "./admin/pages/AdminLoginPage";
import DashboardPage from "./admin/pages/DashboardPage";
import CarsPage from "./admin/pages/CarsPage";
import CarFormPage from "./admin/pages/CarFormPage";
import CarDetailsPage from "./admin/pages/CarDetailsPage";
import OwnersPage from "./admin/pages/OwnersPage";
import OwnerDetailsPage from "./admin/pages/OwnerDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="cars" element={<CarsPage />} />
          <Route path="cars/new" element={<CarFormPage />} />
          <Route path="cars/:id" element={<CarDetailsPage />} />
          <Route path="owners" element={<OwnersPage />} />
          <Route path="owners/:id" element={<OwnerDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
