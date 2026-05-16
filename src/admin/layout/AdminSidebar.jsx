import React from "react";
import { NavLink } from "react-router-dom";
import { BarChart3, Car, CreditCard, Gauge, ShoppingCart, Users } from "lucide-react";

const navigation = [
  { label: "Dashboard", href: "/admin", icon: Gauge },
  { label: "Voitures", href: "/admin/cars", icon: Car },
  { label: "Réservations", href: "/admin", icon: BarChart3 },
  { label: "Achats", href: "/admin", icon: ShoppingCart },
  { label: "Paiements", href: "/admin", icon: CreditCard },
  { label: "Utilisateurs", href: "/admin", icon: Users },
];

export default function AdminSidebar() {
  return (
    <aside className="hidden min-h-screen w-72 border-r border-white/10 bg-black/95 px-5 py-6 lg:fixed lg:inset-y-0 lg:flex lg:flex-col">
      <div className="flex items-center gap-3 px-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-orange-500 text-lg font-black text-white shadow-lg shadow-red-600/30">
          M
        </div>
        <div>
          <p className="text-lg font-bold text-white">MITEL Admin</p>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">SuperAdmin</p>
        </div>
      </div>

      <nav className="mt-10 space-y-2">
        {navigation.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            end={item.href === "/admin"}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg shadow-red-600/25"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-600/15 to-orange-500/10 p-5">
        <p className="text-sm font-semibold text-white">Plateforme automobile</p>
        <p className="mt-2 text-sm leading-6 text-gray-400">
          Pilotage des locations, ventes, paiements et commissions.
        </p>
      </div>
    </aside>
  );
}
