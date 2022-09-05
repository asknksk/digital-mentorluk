import React from "react";
import Main from "../components/Main";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <div className="container-fluid text-center row">
      <div className="col-2">
        <Profile />
      </div>
      <div className="col-10">
        <Main />
      </div>
    </div>
  );
};

export default Home;
