import React from "react";
import "./AppHeader.css";
import userAvatar from "../assets/avatar.png"; 
import logoIcon from "../assets/logo.png"; 
const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="logo-section">
        <img src={logoIcon} alt="Healthcare Logo" className="logo-icon" />
        <span className="logo-text">Healthcare<span className="dot">.</span></span>
      </div>

      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
      />

      <div className="header-controls">
        <button className="notif-btn">🔔</button>
        <img src={userAvatar} alt="User Avatar" className="user-avatar" />
        <button className="add-btn">＋</button>
      </div>
    </header>
  );
};

export default AppHeader;
