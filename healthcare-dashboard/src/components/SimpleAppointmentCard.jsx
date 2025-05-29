// import React from 'react';
// import './SimpleAppointmentCard.css';

// const SimpleAppointmentCard = ({ title, time, icon }) => {
//   return (
//     <div className="simple-card">
//       <span className="icon">{icon}</span>
//       <div className="text">
//         <p>{title}</p>
//         <small>{time}</small>
//       </div>
//     </div>
//   );
// };

// export default SimpleAppointmentCard;

import React from "react";

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="bg-blue-50 rounded-lg p-4 flex items-center space-x-3 w-full md:w-[calc(50%-0.5rem)]">
      <span className="text-xl">{icon}</span>
      <div>
        <h5 className="text-sm font-semibold text-gray-800">{title}</h5>
        <p className="text-xs text-gray-600">{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
