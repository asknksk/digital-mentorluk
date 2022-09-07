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
        style={{ marginTop: "1rem" }}
      >
        <div className="slider-div ">
          <Slider {...settings}>
            <div className="slider-img-container d-flex flex-column align-items-center">
              <img
                src={populasyon1}
                alt="populasyon-resim"
                style={{ height: "440px" }}
              />
            </div>
            <div className="slider-img-container d-flex flex-column align-items-center">
              <img
                src={populasyon2}
                alt="populasyon-açıklama"
                style={{ height: "440px" }}
              />
              <div className="align-self-end mx-4">
                <Link to="/egitim-page-2">
                  <button className="btn slider-button ">Devam Et</button>
                </Link>
              </div>
              
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default EgitimThree;
