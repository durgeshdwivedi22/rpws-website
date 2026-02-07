import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../components/AuthContext";
import { motion } from "framer-motion";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import API_URL from "../api";
const sidebarCollapsedWidth = 50;
const sidebarExpandedWidth = 150;

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return false;
    }
    const emailRegex = /^[0-9]{4}[A-Za-z]{3}[0-9]{3}@axiscolleges\.in$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email address");
      return false;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const { data } = await axios.post(`${API_URL}/signup`, formData);
      login(data.token);
      toast.success("Signup successful!");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      toast.error(err.response?.data?.error || "Network error");
    } finally {
      setLoading(false);
    }
  };

  const sidebarItems = [
    { text: "Register", icon: <PersonAddIcon />, link: "/register" },
    { text: "Winners", icon: <EmojiEventsIcon />, link: "/winners" },
    { text: "Signup", icon: <AppRegistrationIcon />, link: "/signup" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        onMouseEnter={() => setSidebarOpen(true)}
        onMouseLeave={() => setSidebarOpen(false)}
        sx={{
          width: sidebarOpen ? sidebarExpandedWidth : sidebarCollapsedWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: sidebarOpen ? sidebarExpandedWidth : sidebarCollapsedWidth,
            bgcolor: "#1a237e",
            color: "#fff",
            backdropFilter: "blur(10px)",
            overflowX: "hidden",
            borderRight: "1px solid rgba(0,0,0,0.1)",
            transition: "width 0.3s",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", py: 3, mb: 2, color: "#fff" }}>
          <HomeIcon fontSize="large" />
          {sidebarOpen && (
            <Typography variant="h6" mt={1} fontWeight="bold">
              Admin Panel
            </Typography>
          )}
        </Box>
        <List>
          {sidebarItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component={Link}
                to={item.link}
                sx={{
                  borderRadius: 2,
                  mx: 1,
                  transition: "0.3s",
                  color: "#fff",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    transform: "scale(1.05)",
                    color: "#90caf9",
                  },
                }}
              >
                {item.icon}
                {sidebarOpen && <ListItemText primary={item.text} sx={{ ml: 2 }} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        sx={{
          ml: sidebarCollapsedWidth,
          width: `calc(100% - ${sidebarCollapsedWidth}px)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="signup-card shadow-lg p-5"
          style={{ width: "100%", maxWidth: "420px", borderRadius: "20px", background: "rgba(255, 255, 255, 0.95)" }}
        >
          <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#333" }}>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 position-relative">
              <PersonIcon sx={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#667eea" }} />
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Full Name"
                className="w-full px-5 py-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition text-lg"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 position-relative">
              <EmailIcon sx={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#667eea" }} />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                className="w-full px-5 py-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition text-lg"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 position-relative">
              <LockIcon sx={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#667eea" }} />
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                className="w-full px-5 py-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition text-lg"
                onChange={handleChange}
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn w-100 btn-lg text-white"
              style={{ background: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)", border: "none", borderRadius: "10px", fontWeight: "bold" }}
              disabled={loading}
            >
              {loading ? "Signing up..." : "Signup"}
            </motion.button>
          </form>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login" style={{ color: "#6a11cb", fontWeight: "bold", textDecoration: "none" }}>Login</Link>
          </p>
        </motion.div>
        <ToastContainer position="bottom-left" />
      </Box>
    </Box>
  );
};

export default Signup;
