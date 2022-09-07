import React from "react";
import { Link } from "react-router-dom";
import NavbarEgitim from "./NavbarEgitim";
import inovasyonNedir from "../../assets/egitim/inovasyon-nedir.png";

const EgitimSon = () => {
  return (
    <>
      <NavbarEgitim />
      <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ marginTop: "1rem" }}
      >
        <div className=" d-flex align-items-center justify-content-between  egitim-2-div">
          <div style={{ marginRight: "1rem" }}></div>
          <div>
            <img src={inovasyonNedir} alt="" />
          </div>

          <div style={{ marginRight: "1rem" }}>
            <Link to="/">
              <button className="btn slider-button ">Bitir</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EgitimSon;
