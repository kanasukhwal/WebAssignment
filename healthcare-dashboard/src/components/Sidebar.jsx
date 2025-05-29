import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import {
  FaHistory,
  FaCalendarAlt,
  FaRegCalendarCheck,
  FaChartBar,
  FaTools,
  FaComments,
  FaHeadset,
  FaCog,
} from "react-icons/fa";

const sidebarLinks = [
  { name: "Dashboard", icon: RiDashboardFill },
  { name: "History", icon: FaHistory },
  { name: "Calendar", icon: FaCalendarAlt },
  { name: "Appointments", icon: FaRegCalendarCheck },
  { name: "Statistics", icon: FaChartBar },
  { name: "Tests", icon: FaTools },
  { name: "Chat", icon: FaComments },
  { name: "Support", icon: FaHeadset },
  { name: "Setting", icon: FaCog },
];

const Sidebar = () => {
  return (
    <aside
      style={{
        width: "240px",
        background: "#ffffff",
        borderRight: "1px solid #e2e8f0",
        padding: "30px 20px",
        height: "100vh",
        boxShadow: "2px 0 5px rgba(0,0,0,0.05)",
      }}
    >
      {/* Logo */}
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "700",
          marginBottom: "30px",
          color: "#2d3748",
        }}
      >
        <span style={{ color: "#00c9a7" }}>Health</span>
        <span style={{ color: "#4a5568" }}>care.</span>
      </h2>

      {/* Section Title */}
      <h3
        style={{
          fontSize: "13px",
          fontWeight: "500",
          color: "#a0aec0",
          marginBottom: "16px",
          textTransform: "uppercase",
        }}
      >
        General
      </h3>

      {/* Navigation Links */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {sidebarLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 12px",
                marginBottom: "10px",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                color: "#2d3748",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#ebf8ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <Icon
                style={{
                  marginRight: "14px",
                  fontSize: "18px",
                  color: "#3b82f6",
                }}
              />
              {link.name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
