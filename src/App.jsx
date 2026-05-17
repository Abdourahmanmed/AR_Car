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
import BookingsPage from "./admin/pages/BookingsPage";
import BookingDetailsPage from "./admin/pages/BookingDetailsPage";
import PurchasesPage from "./admin/pages/PurchasesPage";
import PurchaseDetailsPage from "./admin/pages/PurchaseDetailsPage";
import PaymentsPage from "./admin/pages/PaymentsPage";
import ReceiptsPage from "./admin/pages/ReceiptsPage";
import SettingsPage from "./admin/pages/SettingsPage";

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
          <Route path="bookings" element={<BookingsPage />} />
          <Route path="bookings/:id" element={<BookingDetailsPage />} />
          <Route path="purchases" element={<PurchasesPage />} />
          <Route path="purchases/:id" element={<PurchaseDetailsPage />} />
          <Route path="payments" element={<PaymentsPage />} />
          <Route path="receipts" element={<ReceiptsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
