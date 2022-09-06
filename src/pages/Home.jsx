import React from "react";
import Main from "../components/Main";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <div className="container-fluid text-center row m-0">
      <div className="col-2 bg-light h-75 p-0 ">
        <Profile />
      </div>
      <div className="col-10 m-0 pe-0">
        <Main />
      </div>
    </div>
  );
};

export default Home;
