import React from "react";
import { Outlet } from "react-router-dom";
import AdminMobileNav from "./AdminMobileNav";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.12),transparent_30%)]" />
      <AdminSidebar />
      <div className="relative lg:pl-72">
        <AdminTopbar />
        <main className="px-5 py-6 pb-28 lg:px-8 lg:pb-10">
          <Outlet />
        </main>
      </div>
      <AdminMobileNav />
    </div>
  );
}
