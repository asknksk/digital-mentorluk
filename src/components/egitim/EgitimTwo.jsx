import React from "react";
import { Link } from "react-router-dom";
import tren1 from "../../assets/egitim/tren1.png";
import tren2 from "../../assets/egitim/tren2.png";
import tren3 from "../../assets/egitim/tren3.png";
import tren4 from "../../assets/egitim/tren4.png";
import NavbarEgitim from "../../components/egitim/NavbarEgitim";

const EgitimTwo = () => {
  return (
    <>
      <NavbarEgitim />
      <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ marginTop: "1rem" }}
      >
        <div className=" d-flex align-items-center justify-content-center flex-column egitim-2-div">
          <div className="d-flex align-items-center justify-content-around flex-wrap w-100">
            <img src={tren1} alt="" />
            <img src={tren2} alt="" />
            <img src={tren3} alt="" />
            <img src={tren4} alt="" />
          </div>
          <div className="align-self-end mx-4 mt-4">
            <Link to="/egitim-page-3">
              <button className="btn slider-button ">Devam Et</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EgitimTwo;
