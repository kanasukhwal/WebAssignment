import React from "react";
import "./AnatomySection.css";

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <img
        src="/assets/images/anatomy-placeholder.png"
        alt="Anatomy"
        className="anatomy-img"
      />
      <div className="status-label heart">Healthy Heart</div>
      <div className="status-label leg">Healthy Leg</div>
    </div>
  );
};

export default AnatomySection;
