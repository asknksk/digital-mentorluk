import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarEgitim from "./NavbarEgitim";

const EgitimSoru = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [isFalse, setIsFalse] = useState(false);
  const [cevaplandi, setCevaplandi] = useState(false);

  const handleCevap = (e) => {
    console.log(e.target.id);
    if (!cevaplandi) {
      if (e.target.id === "dogru") {
        setIsTrue(true);
        e.target.disabled = true;
        setIsFalse(true);
      } else {
        setIsFalse(true);
      }
    }
    setCevaplandi(true);
  };

  return (
    <>
      <NavbarEgitim />
      <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ marginTop: "1rem" }}
      >
        <div className=" d-flex align-items-center flex-column egitim-2-div">
          <div className="d-flex justify-content-between align-items-center m-0 p-0 w-100 my-5">
            <p className="maviCizgiSol m-0"></p>
            <h3 className="m-0 p-0 mx-5" style={{ color: "#024D81" }}>
              SORU
            </h3>
            <p className="maviCizgiSag m-0"></p>
          </div>
          <div>
            <p className="display-5 ">Sence her Yenilik bir inovasyon mudur?</p>
            <div className="d-flex align-items-center justify-content-between px-5 py-2">
              <p
                className="soru-p"
                id="dogru"
                onClick={(e) => handleCevap(e)}
                style={{
                  backgroundColor: isTrue ? "#51FB15" : "",
                  //   backgroundColor: isFalse ? "#F32626;" : "",
                }}
              >
                İnovasyondur
              </p>
              <p
                className="soru-p"
                id="yanlis"
                onClick={(e) => handleCevap(e)}
                style={{
                  backgroundColor: isFalse ? "#F32626" : "",
                }}
              >
                İnovasyon değildir
              </p>
            </div>
          </div>
          {cevaplandi && (
            <div className="align-self-end mx-4 mt-4">
              <Link to="/egitim-soru">
                <button className="btn slider-button ">Devam Et</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EgitimSoru;
