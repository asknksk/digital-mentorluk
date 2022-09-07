import React from "react";
import { Link } from "react-router-dom";
import NavbarEgitim from "../../components/egitim/NavbarEgitim";

const EgitimVideo = () => {
  return (
    <>
      <NavbarEgitim />
      <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ marginTop: "1rem" }}
      >
        <div className=" d-flex align-items-center justify-content-center flex-column egitim-2-div">
          <div className="video-container">
            <iframe
              className="egitim-videosu"
              width="1024"
              height="450"
              src="https://www.youtube.com/embed/haCJs7vDH1A"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="align-self-end mx-4 mt-4">
            <Link to="/egitim-soru">
              <button className="btn slider-button ">Devam Et</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EgitimVideo;
