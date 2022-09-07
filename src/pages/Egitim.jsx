import React from "react";
import Carosel from "../components/egitim/Carosel";
import NavbarEgitim from "../components/egitim/NavbarEgitim";

const Egitim = () => {
  return (
    <>
      <NavbarEgitim />
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ marginTop: "1rem" }}
      >
        <Carosel />
      </div>
    </>
  );
};

export default Egitim;
