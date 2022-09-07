import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import inovasyonNedir from "../../assets/egitim/inovasyon-nedir.png";
import invosyon1 from "../../assets/egitim/inovasyon1.png";
import invosyon2 from "../../assets/egitim/inovasyon2.png";
import invosyon3 from "../../assets/egitim/inovasyon3.png";
import invosyon4 from "../../assets/egitim/inovasyon4.png";
import invosyon5 from "../../assets/egitim/inovasyon5.png";
import invosyon6 from "../../assets/egitim/inovasyon6.png";

const Carosel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-div">
      <h2 style={{ color: "#024D81", padding: "1rem" }}>
        {" "}
        İNOVASYON EĞİTİMİ 101{" "}
      </h2>
      <Slider {...settings}>
        <div className="slider-img-container">
          <img src={inovasyonNedir} alt="" />
        </div>
        <div className="slider-img-container">
          <img src={invosyon1} alt="" />
        </div>
        <div className="slider-img-container">
          <img src={invosyon2} alt="" />
        </div>
        <div className="slider-img-container">
          <img src={invosyon3} alt="" />
        </div>
        <div className="slider-img-container">
          <img src={invosyon4} alt="" />
        </div>
        <div className="slider-img-container">
          <img src={invosyon5} alt="" />
        </div>
        <div className="slider-img-container">
          <img src={invosyon6} alt="" />
        </div>
        <div className=" slider-button-div ">
          <button className="btn slider-button ">Devam Et</button>
        </div>
      </Slider>
    </div>
  );
};

export default Carosel;
