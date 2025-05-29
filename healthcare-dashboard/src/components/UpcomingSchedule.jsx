// import React from "react";
// import { FaHeart } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";
// import { FaBrain } from "react-icons/fa";
// import { GiLoveInjection } from "react-icons/gi";
// import { IoIosMan } from "react-icons/io";
// import { FaTooth } from "react-icons/fa";
// import { FaBone } from "react-icons/fa";

// const UpcomingSchedule = () => {
//   const styles = {
//     container: {
//       backgroundColor: "#fff",
//       padding: "20px",
//       borderRadius: "10px",
//       boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//       marginBottom: "20px",
//       maxWidth: "500px",
//       width: "100%",
//       boxSizing: "border-box",
//     },
//     heading: {
//       fontSize: "20px",
//       fontWeight: "bold",
//       marginBottom: "15px",
//       color: "#333",
//     },
//     group: {
//       marginBottom: "20px",
//     },
//     dayTitle: {
//       fontSize: "16px",
//       fontWeight: "600",
//       marginBottom: "10px",
//       color: "#333",
//     },
//     cardContainer: {
//       display: "flex",

//       display: "flex",
//       flexDirection: "column",
//       gap: "10px",
//       flexWrap: "wrap",
//     },
//     card: {
//       backgroundColor: "#e6f0fa",
//       borderRadius: "8px",
//       padding: "15px",
//       display: "flex",
//       alignItems: "center",
//       gap: "12px",
//       boxSizing: "border-box",
//     },
//     cardIcon: {
//       fontSize: "20px",
//     },
//     cardTitle: {
//       fontSize: "14px",
//       fontWeight: "600",
//       color: "#333",
//       margin: "0 0 5px 0",
//     },
//     cardTime: {
//       fontSize: "12px",
//       color: "#666",
//       margin: 0,
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h3 style={styles.heading}>The Upcoming Schedule</h3>

//       <div style={styles.group}>
//         <h4 style={styles.dayTitle}>On Thursday</h4>

//         <div style={styles.cardContainer }>
//           <div style={styles.card}>
//             <span style={styles.cardIcon}>
//               <GiLoveInjection style={{ color: "red" }} />
//             </span>
//             <div>
//               <h5 style={styles.cardTitle}>Health checkup complete</h5>
//               <p style={styles.cardTime}>11:00 AM</p>
//             </div>
//           </div>
//           <div style={styles.card}>
//             <span style={styles.cardIcon}>
//               <FaEye style={{ color: "black" }} />
//             </span>
//             <div>
//               <h5 style={styles.cardTitle}>Ophthalmologist</h5>
//               <p style={styles.cardTime}>14:00 PM</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div style={styles.group}>
//         <h4 style={styles.dayTitle}>On Saturday</h4>
//         <div style={styles.cardContainer}>
//           <div style={styles.card}>
//             <span style={styles.cardIcon}>
//               <FaHeart style={{ color: "red" }} />
//             </span>
//             <div>
//               <h5 style={styles.cardTitle}>Cardiologist</h5>
//               <p style={styles.cardTime}>12:00 AM</p>
//             </div>
//           </div>
//           <div style={styles.card}>
//             <span style={styles.cardIcon}>
//               <FaBrain
//                 style={{
//                   width: "100%",
//                   height: "20px",
//                   background: "linear-gradient(to right, red, orange, )",
//                   borderRadius: "10px",
//                 }}
//               />
//             </span>
//             <div>
//               <h5 style={styles.cardTitle}>Neurologist</h5>
//               <p style={styles.cardTime}>16:00 PM</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpcomingSchedule;
import React from "react";
import { FaHeart, FaEye, FaBrain, FaTooth, FaBone } from "react-icons/fa";
import { GiLoveInjection } from "react-icons/gi";
import { IoIosMan } from "react-icons/io";

const UpcomingSchedule = () => {
  const styles = {
    container: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
      maxWidth: "500px",
      width: "100%",
      boxSizing: "border-box",
    },
    heading: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "15px",
      color: "#333",
    },
    group: {
      marginBottom: "20px",
    },
    dayTitle: {
      fontSize: "16px",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#333",
    },
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      flexWrap: "wrap",
    },
    card: {
      backgroundColor: "#e6f0fa",
      borderRadius: "8px",
      padding: "15px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      boxSizing: "border-box",
    },
    cardIcon: {
      fontSize: "20px",
    },
    cardTitle: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#333",
      margin: "0 0 5px 0",
    },
    cardTime: {
      fontSize: "12px",
      color: "#666",
      margin: 0,
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>The Upcoming Schedule</h3>

      <div style={styles.group}>
        <h4 style={styles.dayTitle}>On Thursday</h4>
        <div style={{ ...styles.cardContainer, flexDirection: "row" }}>
          <div style={styles.card}>
            <span style={styles.cardIcon}>
              <GiLoveInjection style={{ color: "red" }} />
            </span>
            <div>
              <h5 style={styles.cardTitle}>Health checkup complete</h5>
              <p style={styles.cardTime}>11:00 AM</p>
            </div>
          </div>
          <div style={styles.card}>
            <span style={styles.cardIcon}>
              <FaEye style={{ color: "black" }} />
            </span>
            <div>
              <h5 style={styles.cardTitle}>Ophthalmologist</h5>
              <p style={styles.cardTime}>14:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Saturday Group: Cards Still in Column */}
      <div style={styles.group}>
        <h4 style={styles.dayTitle}>On Saturday</h4>
        <div style={{ ...styles.cardContainer, flexDirection: "row" }}>
          <div style={styles.card}>
            <span style={styles.cardIcon}>
              <FaHeart style={{ color: "red" }} />
            </span>
            <div>
              <h5 style={styles.cardTitle}>Cardiologist</h5>
              <p style={styles.cardTime}>12:00 AM</p>
            </div>
          </div>
          <div style={styles.card}>
            <span style={styles.cardIcon}>
              <IoIosMan
                style={{
                  width: "100%",
                  height: "20px",
                  background: "linear-gradient(to right, red, orange)",
                  borderRadius: "10px",
                }}
              />
            </span>
            <div>
              <h5 style={styles.cardTitle}>Neurologist</h5>
              <p style={styles.cardTime}>16:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
