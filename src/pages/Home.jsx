import React from "react";
import Main from "../components/Main";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <div className="container-fluid text-center d-flex align-items-center justify-content-between">
      <div style={{ width: "12rem" }}>
        <Profile />
      </div>
      <div className="bg-danger" style={{ width: "70rem", height: "100vh" }}>
        <Main />
      </div>
    </div>
  );
};

export default Home;
