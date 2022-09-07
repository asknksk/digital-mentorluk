import React, { useState } from "react";
import NavbarEgitim from "./NavbarEgitim";
import inovasyonNedir from "../../assets/egitim/inovasyon-nedir.png";
import ModalComponent from "./ModalComponent";

const EgitimSon = () => {
  const [isShow, setIsShow] = useState(false);
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
            <button
              className="btn slider-button "
              onClick={() => setIsShow(!isShow)}
            >
              Bitir
            </button>
          </div>
        </div>
      </div>
      {isShow ? (
        <ModalComponent show={isShow} onHide={() => setIsShow(false)} />
      ) : null}
    </>
  );
};

export default EgitimSon;
