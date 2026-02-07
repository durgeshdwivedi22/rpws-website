import React from "react";
import "animate.css";
import { motion } from "framer-motion";
 // ✅ Make sure logo is in src/assets

const Contact = () => {
  return (
    <div
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex flex-col items-center"
    >
      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-10"
      >
        <img
          src="axislogo-removebg-preview.png"
          alt="Axis College Logo"
          className="animate__animated animate__fadeInDown w-44 h-auto rounded-full shadow-2xl mx-auto transition-transform duration-500 hover:scale-110 hover:shadow-3xl"
        />
        <h2
          className="animate__animated animate__fadeInUp mt-6 text-3xl font-bold text-gray-800"
        >
          AITM Support Team
        </h2>
        <p
          className="text-lg text-gray-700 mt-2"
        >
          This Support Page is exclusively for <strong>Axis Institute of Technology & Management</strong>.
        </p>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-xl p-10"
      >
        <h3 className="text-2xl font-bold text-indigo-900 mb-6">
          Contact Us
        </h3>
        <form>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              placeholder="Write your message"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
