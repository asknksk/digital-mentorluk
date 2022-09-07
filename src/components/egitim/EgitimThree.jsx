import Slider from "react-slick";
import populasyon1 from "../../assets/egitim/populasyon1.png";
import populasyon2 from "../../assets/egitim/populasyon2.png";
import { Link } from "react-router-dom";
import NavbarEgitim from "./NavbarEgitim";

const EgitimThree = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <NavbarEgitim />
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ marginTop: "10px" }}
      >
        <div className="slider-div ">
          <Slider {...settings}>
            <div className="d-flex flex-column align-items-center p-0 ">
              <img
                src={populasyon1}
                alt="populasyon-resim"
                style={{
                  height: "420px",
                  userSelect: "none",
                  marginTop: "8px",
                }}
              />
            </div>
            <div className="d-flex flex-column align-items-center m-0 p-0 ">
              <img
                src={populasyon2}
                alt="populasyon-açıklama"
                style={{
                  height: "440px",
                  userSelect: "none",
                  marginTop: "8px",
                }}
              />
              <div
                className="align-self-end mx-4"
                style={{
                  zIndex: "500",
                  position: "absolute",
                  right: "50px",
                  bottom: "75px",
                }}
              >
                <Link to="/egitim-video">
                  <button className="btn slider-button ">Devam Et</button>
                </Link>
              </div>{" "}
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default EgitimThree;
