import React from "react";
import { Bell, Menu, Search, ShieldCheck } from "lucide-react";

export default function AdminTopbar({ onMobileMenuOpen }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="flex min-h-20 items-center justify-between gap-4 px-5 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-2xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-red-500/30 hover:text-white lg:hidden"
            onClick={onMobileMenuOpen}
            aria-label="Ouvrir la sidebar admin"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-orange-300">
              <ShieldCheck className="h-4 w-4" /> Espace Admin / SuperAdmin
            </p>
            <h1 className="mt-1 text-xl font-bold text-white lg:text-2xl">Dashboard opérationnel</h1>
          </div>
        </div>

        <div className="hidden flex-1 justify-end gap-3 md:flex">
          <label className="flex max-w-sm flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-gray-400">
            <Search className="h-4 w-4" />
            <input
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
              placeholder="Rechercher une voiture, réservation..."
              type="search"
            />
          </label>
          <button className="rounded-2xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-red-500/30 hover:text-white">
            <Bell className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-red-600 to-orange-500" />
            <div>
              <p className="text-sm font-semibold text-white">Admin</p>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
