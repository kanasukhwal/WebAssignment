import React from "react";

const ActivityFeed = () => {
  const styles = {
    container: {
      marginTop: "30px",
      background: "#fff",
      borderRadius: "20px",
      padding: "20px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
      width: "100%",
      maxWidth: "500px",
      boxSizing: "border-box",
    },
    heading: {
      marginBottom: "10px",
      fontSize: "18px",
      fontWeight: 600,
      color: "#2d3748",
    },
    subText: {
      fontSize: "12px",
      color: "gray",
      marginBottom: "20px",
    },
    chartWrapper: {
      display: "flex",
      gap: "10px",
      marginTop: "20px",
      justifyContent: "space-between",
    },
    barGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      alignItems: "center",
      flex: 1,
    },
    bar: {
      width: "6px",
      borderRadius: "4px",
    },
    primary: {
      background: "#4c51bf",
    },
    secondary: {
      background: "#cbd5e0",
    },
    dayLabel: {
      fontSize: "10px",
      color: "#666",
      marginTop: "5px",
    },
  };

  const data = [
    { day: "Mon", primaryHeight: 20, secondaryHeight: 30 },
    { day: "Tues", primaryHeight: 25, secondaryHeight: 20 },
    { day: "Wed", primaryHeight: 15, secondaryHeight: 25 },
    { day: "Thurs", primaryHeight: 35, secondaryHeight: 15 },
    { day: "Fri", primaryHeight: 10, secondaryHeight: 20 },
    { day: "Sat", primaryHeight: 30, secondaryHeight: 10 },
    { day: "Sun", primaryHeight: 5, secondaryHeight: 15 },
  ];

  return (
    <div style={styles.container}>
      <h4 style={styles.heading}>Activity</h4>
      <p style={styles.subText}>3 appointments on this week</p>
      <div style={styles.chartWrapper}>
        {data.map((item, index) => (
          <div style={styles.barGroup} key={index}>
            <div
              style={{
                ...styles.bar,
                ...styles.primary,
                height: `${item.primaryHeight}px`,
              }}
            />
            <div
              style={{
                ...styles.bar,
                ...styles.secondary,
                height: `${item.secondaryHeight}px`,
              }}
            />
            <div style={styles.dayLabel}>{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
