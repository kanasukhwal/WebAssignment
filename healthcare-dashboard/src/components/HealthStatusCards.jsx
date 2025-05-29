import React from 'react';
import { healthStatus } from '../data/healthStatus';
import './HealthStatusCards.css';

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthStatus.map((item, index) => (
        <div key={index} className={`status-card ${item.status.toLowerCase()}`}>
          <div className="icon">{item.icon}</div>
          <div className="title">{item.title}</div>
          <div className="date">Date: {item.date}</div>
          <div className="bar">
            <div className="fill" style={{ width: item.progress + '%' }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
