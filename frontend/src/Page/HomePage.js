import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="relative text-white min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800"
      >
        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <p className="uppercase tracking-widest font-bold text-yellow-400 mb-4">
                Welcome to <strong>RPWS</strong>
              </p>
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
                Rate and Review <br/> <span className="text-indigo-200">College Events</span> Instantly
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto lg:mx-0">
                Participate, vote, and celebrate with real-time results — all in
                one smart, secure platform built for colleges.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                <Link
                  to="/winner"
                  className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
                >
                  View Winners
                </Link>
                <Link
                  to="/register"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-white/10 transition transform hover:scale-105"
                >
                  Register
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative">
                {/* Interactive Logo Card */}
                <div 
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-indigo-500/30"
                >
                  <div className="flex flex-col items-center">
                    {/* Logo Container with Rotation Effect */}
                    <div 
                      className="mb-6 relative group"
                    >
                      <div 
                        className="p-6 rounded-full bg-gradient-to-br from-white to-gray-100 shadow-xl relative z-10"
                      >
                        <img
                          src="axislogo-removebg-preview.png"
                          alt="AITM Logo"
                          className="w-32 h-32 object-contain transition-transform duration-700 group-hover:rotate-[360deg] group-hover:scale-110"
                        />
                        {/* Animated Ring */}
                        <div
                          className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"
                        ></div>
                      </div>
                    </div>

                    <div className="text-center">
                      <h5 className="text-2xl font-bold mb-3 text-white">Gandhigiri Event</h5>
                      <p className="text-indigo-100">
                        Participate in coding contests and hackathons, showcase your
                        talent, and see live results instantly!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Floating Elements */}
                <div
                  className="absolute w-32 h-32 bg-purple-500/30 rounded-full blur-3xl -top-10 -right-10 animate-pulse"
                ></div>
                <div
                  className="absolute w-24 h-24 bg-indigo-500/30 rounded-full blur-3xl -bottom-10 -left-10 animate-pulse delay-700"
                ></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900"
          >
            About RPWS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" 
          >
            RPWS (Rate Page Web System) is your one-stop platform to rate,
            review, and celebrate college talent. Built with modern technology,
            it ensures transparency, engagement, and fairness in every event.
          </motion.p>
        </div>
      </section>

      {/* STATS SECTION */}
      <section
        className="py-20 bg-gradient-to-br from-gray-900 to-black text-white"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: "bi-hand-thumbs-up",
                value: "5000+",
                label: "Total Votes",
              },
              { icon: "bi-people", value: "250+", label: "Participants" },
              { icon: "bi-calendar-event", value: "50+", label: "Events" },
              { icon: "bi-shield-check", value: "100%", label: "Secure" },
            ].map((stat, idx) => (
              <div key={idx}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10"
                >
                  <i className={`bi ${stat.icon} text-4xl mb-4 block text-indigo-400`}></i>
                  <h2 className="text-3xl font-bold mb-2">{stat.value}</h2>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Why Choose RPWS?
          </h2>
          <p className="text-xl text-gray-500 mb-12">
            Everything you need for a seamless event experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "bi-lightning-charge text-indigo-600",
                title: "Instant Voting",
                desc: "Vote quickly and easily with our clean interface.",
              },
              {
                icon: "bi-shield-lock text-green-600",
                title: "Secure & Verified",
                desc: "Every vote is verified — ensuring fairness for all.",
              },
              {
                icon: "bi-bar-chart text-yellow-500",
                title: "Live Analytics",
                desc: "See who's leading with real-time vote data.",
              },
              {
                icon: "bi-download text-red-500",
                title: "Export Reports",
                desc: "Download event results as PDFs instantly.",
              },
            ].map((feature, idx) => (
              <div key={idx}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="h-full p-8 rounded-2xl shadow-lg border border-gray-100 bg-white hover:shadow-xl transition-shadow"
                >
                  <i className={`bi ${feature.icon} text-5xl mb-6 block`}></i>
                  <h5 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h5>
                  <p className="text-gray-500">{feature.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="py-20 text-center bg-gradient-to-r from-blue-200 to-purple-200"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Ready to Join the Fun?</h2>
          <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
            Be part of your college's most engaging and transparent rating
            system.
          </p>
          <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-indigo-700 transition"
          >
            <i className="bi bi-person-plus me-2"></i> Register Now
          </Link>
          <Link
            to="/participants"
            className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full font-bold hover:bg-gray-800 hover:text-white transition"
          >
            <i className="bi bi-hand-thumbs-up me-2"></i> Vote Now
          </Link>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE SECTION */}
      <section className="py-20 text-center bg-gray-50">
        <div className="container mx-auto px-6">
          <i className="bi bi-envelope-paper-heart text-6xl text-indigo-500 mb-6 block"></i>
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Stay Updated with RPWS</h3>
          <p className="text-gray-500 mb-8">
            Subscribe to get event notifications and winner announcements!
          </p>
          <div
            className="flex max-w-lg mx-auto shadow-lg rounded-full overflow-hidden"
          >
            <input
              type="email"
              className="flex-1 px-6 py-4 border-none outline-none bg-white"
              placeholder="Enter your email"
            />
            <button className="bg-indigo-600 text-white px-8 font-bold hover:bg-indigo-700 transition" type="button">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* SCROLL TO TOP */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-8 right-8 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-indigo-700 transition z-50"
      >
        <i className="bi bi-arrow-up text-2xl"></i>
      </button>
    </div>
  );
};

export default HomePage;