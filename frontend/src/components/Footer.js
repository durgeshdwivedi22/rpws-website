import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 mt-20">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

      {/* About Section */}
      <div>
        <h5 className="text-xl font-bold mb-4 text-indigo-400">RPWS</h5>
        <p className="text-gray-400 leading-relaxed">RPWS is a platform for rating and reviewing college events, participants, and winners. Engage, vote, and stay updated with all our activities.</p>
      </div>

      {/* Quick Links */}
      <div>
        <h5 className="text-xl font-bold mb-4 text-indigo-400">Quick Links</h5>
        <ul className="space-y-2">
          <li><Link className="text-gray-400 hover:text-white transition" to="/">Home</Link></li>
          <li><Link className="text-gray-400 hover:text-white transition" to="/participants">Participate</Link></li>
          <li><Link className="text-gray-400 hover:text-white transition" to="/winner">Winner</Link></li>
          <li><Link className="text-gray-400 hover:text-white transition" to="/register">Register</Link></li>
          <li><Link className="text-gray-400 hover:text-white transition" to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h5 className="text-xl font-bold mb-4 text-indigo-400">Contact</h5>
        <p className="text-gray-400 mb-2">Email: <a href="mailto:info@rpws.com" className="hover:text-white transition">info@rpws.com</a></p>
        <p className="text-gray-400 mb-2">Phone: <a href="tel:+911234567890" className="hover:text-white transition">+91 12345 67890</a></p>
        <p className="text-gray-400">Address: Axis College, India</p>
      </div>

      {/* Social Links */}
      <div>
        <h5 className="text-xl font-bold mb-4 text-indigo-400">Follow Us</h5>
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-white text-2xl transition"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl transition"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl transition"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl transition"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>

    {/* Divider */}
    <hr className="border-gray-800 mb-8" />

    {/* Footer Bottom */}
    <div className="text-center text-gray-500">
      <p>&copy; {new Date().getFullYear()} RPWS. All rights reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
