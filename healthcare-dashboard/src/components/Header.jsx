  import React from "react";
  import { FiBell, FiPlus } from "react-icons/fi";

  const Header = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          background: "#0d6efd",
          borderBottom: "1px solid #eee",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "black" }}>
          Healthcare.
        </h2>
        <div
          className="header-right"
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            padding: "0.5rem 5rem",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "4rem" }}>
            <input
              type="text"
              placeholder="Search..."
              style={{
                padding: "0.5rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />

            <span>John Doe</span>
            <button
              style={{
                background: "#0d6efd",
                color: "white",
                border: "none",
                borderRadius: "50%",
                padding: "0.5rem",
              }}
            >
              <FiPlus />
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Header;
