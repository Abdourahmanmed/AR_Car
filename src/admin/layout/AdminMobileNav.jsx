import React from "react";
import { NavLink } from "react-router-dom";
import { BarChart3, Car, CreditCard, Gauge, LogOut, ReceiptText, Settings, ShoppingCart, UserRoundCheck } from "lucide-react";

const mobileNavigation = [
  { label: "Dashboard", href: "/admin", icon: Gauge },
  { label: "Cars", href: "/admin/cars", icon: Car },
  { label: "Owners", href: "/admin/owners", icon: UserRoundCheck },
  { label: "Bookings", href: "/admin/bookings", icon: BarChart3 },
  { label: "Purchases", href: "/admin/purchases", icon: ShoppingCart },
  { label: "Payments", href: "/admin/payments", icon: CreditCard },
  { label: "Receipts", href: "/admin/receipts", icon: ReceiptText },
  { label: "Settings", href: "/admin/settings", icon: Settings },
  { label: "Logout", href: "/admin/login", icon: LogOut },
];

export default function AdminMobileNav() {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-40 max-h-[34vh] overflow-y-auto rounded-3xl border border-white/10 bg-black/90 px-3 py-2 shadow-2xl shadow-black/60 backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-3 gap-1 sm:grid-cols-5">
        {mobileNavigation.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            end={item.href === "/admin" || item.href === "/admin/login"}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[0.68rem] font-semibold transition sm:text-xs ${
                isActive ? "bg-gradient-to-r from-red-600 to-orange-500 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
