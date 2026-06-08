import { useAuth } from "../context/userContext";
import { useNavigate, Link } from "react-router-dom";
import { Menu, User } from "lucide-react";
import React from "react";

function Navbar({ setShowLoginModal }) {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div>
              <div className="text-xl font-bold">Djib Drive</div>
              <div className="text-xs text-gray-400">Premium Dealership</div>
            </div>
          </div>

          {/* Nav links */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
            <Link to="/cars" className="text-white font-semibold">Nos Voitures</Link>
            <a href="#" className="text-gray-300 hover:text-white transition">Services</a>
            <a href="#" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>

          {/* Auth */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-300">
                  Bonjour, {user?.prenom}
                </span>
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-lg text-sm hover:bg-red-600/30 transition"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              // ✅ CORRIGÉ : ouvre le modal au lieu de navigate("/login")
              <button
                onClick={() => setShowLoginModal(true)}
                className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition"
              >
                <User className="w-4 h-4" />
                <span>Se connecter</span>
              </button>
            )}
            <button className="lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;