import React from "react";
import MultipleItems from "../components/egitim/Carosel";
import NavbarEgitim from "../components/egitim/NavbarEgitim";

const Egitim = () => {
  return (
    <>
      <NavbarEgitim />
      <div
        className="d-flex align-align-items-center justify-content-center"
        style={{ marginTop: "1rem" }}
      >
        <MultipleItems />
      </div>
    </>
  );
};

export default Egitim;
