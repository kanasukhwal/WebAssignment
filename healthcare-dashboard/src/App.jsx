// Root Component: App.jsx
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";

const App = () => {
  const styles = {
    app: {
      display: "flex",
      flexDirection: "column",
      // minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f7fa",
    },
    main: {
      display: "flex",
      flex: 1,
    },
  };

  return (
    <div style={styles.app}>
      {/* <Header /> */}
      <div style={styles.main}>
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;
