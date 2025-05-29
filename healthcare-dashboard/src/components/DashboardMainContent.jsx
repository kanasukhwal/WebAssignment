import React from "react";
import { FaHeart, FaTooth, FaBone, FaLungs, FaSearch } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import CalendarView from "./CalendarView";
import bodyImage from "../assets/Ana_Muscl_body.png";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

const DashboardMainContent = () => {
  const healthData = [
    {
      icon: FaLungs,
      label: "Lungs",
      date: "26 Oct 2021",
      color: "#f56565",
      progress: 60,
    },
    {
      icon: FaTooth,
      label: "Teeth",
      date: "26 Oct 2021",
      color: "#48bb78",
      progress: 80,
    },
    {
      icon: FaBone,
      label: "Bone",
      date: "26 Oct 2021",
      color: "#ed8936",
      progress: 40,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      {/* Top Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {/* Center Search Bar */}
        <div style={{ flex: 1, marginRight: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#f7fafc",
              padding: "8px 12px",
              borderRadius: "20px",
              border: "1px solid #e2e8f0",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <FaSearch style={{ marginRight: "8px", color: "#718096" }} />
            <input
              type="text"
              placeholder="Search"
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                width: "100%",
              }}
            />
            <FiBell size={25} style={{ fill: "#4c51bf" }} />
          </div>
        </div>

        {/* Right Side Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              background: "#00c9a7",
              borderRadius: "50%",
              padding: "6px",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <HiOutlineUserCircle size={24} />
          </div>
          <div
            style={{
              background: "#4c51bf",
              borderRadius: "50%",
              padding: "6px",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AiOutlinePlus size={20} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {/* Left Section */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            background: "#fff",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "20px",
              color: "#2d3748",
            }}
          >
            Dashboard
          </h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {/* Image Section */}
            <div style={{ flex: 1, minWidth: "150px", position: "relative" }}>
              <img
                src={bodyImage}
                alt="Human Anatomy"
                style={{ maxWidth: "60%", display: "block" }}
              />

              {/* Healthy Heart */}
              <div
                style={{
                  position: "absolute",
                  top: "23%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "#4c51bf",
                  color: "#fff",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <FaHeart /> Healthy Heart
              </div>

              {/* Healthy Leg */}
              <div
                style={{
                  position: "absolute",
                  top: "75%",
                  left: "53%",
                  transform: "translate(-50%, -50%)",
                  background: "#00c9a7",
                  color: "white",
                  borderRadius: "20px",
                  padding: "4px 12px",
                  fontSize: "12px",
                }}
              >
                Healthy Leg
              </div>
            </div>

            {/* Health Cards */}
            <div style={{ flex: 1, minWidth: "150px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {healthData.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        background: "#fff",
                        borderRadius: "20px",
                        padding: "20px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                          style={{
                            backgroundColor: "#f0f4f8",
                            padding: "10px",
                            borderRadius: "12px",
                            marginRight: "10px",
                            fontSize: "20px",
                          }}
                        >
                          <IconComponent style={{ color: item.color }} />
                        </div>
                        <div>
                          <div style={{ fontWeight: "600" }}>{item.label}</div>
                          <div style={{ fontSize: "12px", color: "gray" }}>
                            Date: {item.date}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          background: "#edf2f7",
                          height: "8px",
                          borderRadius: "8px",
                        }}
                      >
                        <div
                          style={{
                            width: `${item.progress}%`,
                            background: item.color,
                            height: "8px",
                            borderRadius: "8px",
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <ActivityFeed />
        </div>

        {/* Right Section */}
        <div style={{ minWidth: "300px", flex: 1 }}>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "150px" }}>
              <CalendarView />
              <UpcomingSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
