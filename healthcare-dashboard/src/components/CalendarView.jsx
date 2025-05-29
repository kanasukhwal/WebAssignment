import React from "react";
import { calendarAppointments } from "../data/appointments";

const CalendarView = () => {
  const styles = {
    container: {
      padding: "24px",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
      fontFamily: "Arial, sans-serif",
    },
    monthTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#2e2e2e",
    },
    calendarGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: "10px",
      marginBottom: "24px",
    },
    dayCell: {
      backgroundColor: "#f9f9fb",
      border: "1px solid #e0e0e0",
      borderRadius: "10px",
      padding: "10px",
      minHeight: "100px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    },
    dayName: {
      fontSize: "12px",
      fontWeight: "bold",
      color: "#777",
      marginBottom: "6px",
    },
    dayDate: {
      fontSize: "14px",
      fontWeight: "bold",
      marginBottom: "8px",
      color: "#333",
    },
    slot: {
      backgroundColor: "#e6f4ff",
      color: "#007acc",
      padding: "4px 6px",
      borderRadius: "5px",
      fontSize: "11px",
      marginBottom: "4px",
    },
    appointmentCards: {
      display: "flex",
      //gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: "16px",
    },
    appointmentCard: {
      backgroundColor: "#fcfcfc",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "16px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
    },
    apptTitle: {
      fontSize: "16px",
      fontWeight: "600",
      marginBottom: "6px",
      color: "#333",
    },
    apptDetail: {
      fontSize: "13px",
      color: "#555",
      marginBottom: "4px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.monthTitle}>October 2021</div>

      <div style={styles.calendarGrid}>
        {calendarAppointments.days.map((day, index) => (
          <div key={index} style={styles.dayCell}>
            <div style={styles.dayName}>{day.day}</div>
            <div style={styles.dayDate}>
              {String(day.date).padStart(2, "0")}
            </div>
            {day.slots.map((slot, i) => (
              <div key={i} style={styles.slot}>
                {slot}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={styles.appointmentCards}>
        {calendarAppointments.details.map((appt, i) => (
          <div
            key={i}
            style={{ ...styles.appointmentCard, backgroundColor: "#e6f0fa" }}
          >
            <h4 style={styles.apptTitle}>{appt.title}</h4>
            <p style={styles.apptDetail}>{appt.time}</p>
            <p style={styles.apptDetail}>{appt.doctor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
