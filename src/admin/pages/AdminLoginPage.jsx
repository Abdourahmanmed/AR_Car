import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, LockKeyhole, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.25),transparent_35%),radial-gradient(circle_at_bottom,rgba(249,115,22,0.13),transparent_30%)]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/85 shadow-2xl shadow-red-950/30 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="hidden bg-[linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.8)),url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200')] bg-cover bg-center p-10 lg:flex lg:flex-col lg:justify-end">
            <div className="max-w-md">
              <p className="mb-4 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-200">
                Premium automotive control room
              </p>
              <h1 className="text-5xl font-black leading-tight">Gestion DriveUp Admin</h1>
              <p className="mt-5 text-lg leading-8 text-gray-300">
                Suivez les locations, demandes d'achat, paiements et revenus depuis un espace sécurisé.
              </p>
            </div>
          </section>

          <section className="p-7 sm:p-10">
            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 shadow-lg shadow-red-600/30">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xl font-bold">Connexion Admin</p>
                <p className="text-sm text-gray-500">Admin / SuperAdmin</p>
              </div>
            </div>

            <form className="space-y-5">
              <label className="block">
                <span className="text-sm font-semibold text-gray-300">Email professionnel</span>
                <input
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-red-500/60"
                  placeholder="admin@driveup.com"
                  type="email"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-gray-300">Mot de passe</span>
                <input
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-red-500/60"
                  placeholder="••••••••"
                  type="password"
                />
              </label>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span className="inline-flex items-center gap-2">
                  <LockKeyhole className="h-4 w-4 text-orange-400" /> Accès mock uniquement
                </span>
                <Link to="/" className="hover:text-white">
                  Retour site
                </Link>
              </div>
              <Link
                to="/admin"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-5 py-4 font-bold text-white shadow-lg shadow-red-600/25 transition hover:shadow-red-500/40"
              >
                Entrer dans le dashboard <ArrowRight className="h-5 w-5" />
              </Link>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
