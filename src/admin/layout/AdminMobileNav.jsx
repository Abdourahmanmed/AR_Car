import React from "react";
import { NavLink } from "react-router-dom";
import { Car, Gauge, Menu, ShoppingCart } from "lucide-react";

const mobileNavigation = [
  { label: "Dashboard", href: "/admin", icon: Gauge },
  { label: "Cars", href: "/admin", icon: Car },
  { label: "Achats", href: "/admin", icon: ShoppingCart },
  { label: "Menu", href: "/admin", icon: Menu },
];

export default function AdminMobileNav() {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-50 rounded-3xl border border-white/10 bg-black/90 px-3 py-2 shadow-2xl shadow-black/60 backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-4 gap-1">
        {mobileNavigation.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            className="flex flex-col items-center gap-1 rounded-2xl px-2 py-2 text-xs font-semibold text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
