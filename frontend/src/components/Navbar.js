import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* ✅ Brand Section */}
        <Link
          className="flex items-center gap-3 group"
          to="/"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
            <img
              src="/axislogo-removebg-preview.png"
              alt="AITM Logo"
              className="relative w-10 h-10 object-contain drop-shadow-lg transform transition-transform duration-300 group-hover:scale-110 bg-white rounded-full p-1"
            />
          </div>
          <span className="text-2xl font-black tracking-tight text-white group-hover:text-indigo-400 transition-colors duration-300">
            RPWS<span className="text-indigo-500">.</span>
          </span>
        </Link>

        {/* Navbar Links */}
        <div className="hidden md:flex items-center gap-8">
            {/* Common Pages */}
              <Link className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group" to="/">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group" to="/about">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>

            {/* Shown only after Clerk login */}
            <SignedIn>
                <Link className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group" to="/participants">
                  Participants
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group" to="/contact">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </SignedIn>

            {/* ✅ Clerk Login/Signup Buttons (redirect to Home after login/signup) */}
            <SignedOut>
                <SignInButton mode="modal" redirectUrl="/">
                  <button className="px-5 py-2 text-sm font-semibold text-white transition-all duration-300 border border-gray-600 rounded-full hover:border-gray-400 hover:bg-white/5">Login</button>
                </SignInButton>
                <SignUpButton mode="modal" redirectUrl="/">
                  <button className="px-5 py-2 text-sm font-bold text-white transition-all duration-300 bg-indigo-600 rounded-full shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 hover:shadow-indigo-500/50 hover:-translate-y-0.5">Sign Up</button>
                </SignUpButton>
            </SignedOut>

            {/* ✅ Clerk Logged-In User */}
            <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10 border-2 border-indigo-500/50 hover:border-indigo-400 transition-colors",
                    },
                  }}
                  afterSignOutUrl="/"
                />
            </SignedIn>

            {/* ✅ Admin Login (only visible if Clerk user NOT signed in) */}
            {!isSignedIn && !token && (
                <Link className="text-xs font-medium text-gray-600 hover:text-gray-400 transition-colors" to="/login">
                  Admin
                </Link>
            )}

            {/* ✅ Admin Dropdown (if admin is logged in) */}
            {token && !isSignedIn && (
              <div className="relative" ref={dropdownRef}>
                <button
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold flex items-center justify-center shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  A
                </button>

                {dropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-50"
                  >
                      <button
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                        onClick={() => {
                          navigate("/admin");
                          setDropdownOpen(false);
                        }}
                      >
                        Admin Panel
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                  </div>
                )}
              </div>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
