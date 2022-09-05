import React from "react";
import weather from "../assets/Weather.png";

const Main = () => {
  return (
    <>
      <div className="bg-white rounded" style={{ height: "103px" }}>
        <div></div>
        <div></div>
      </div>
      <div className="bg-light">
        <div className="bg-info">
          <h3 className="text-center text-light ">MOBILE COMBUSTION</h3>
        </div>
        <div className="row text-start">
          {/* Girdi Alanı */}
          <div className="col-6 p-5">
            <div>
              <h2 className="border-dark border-bottom w-50">GİRDİ ALANI</h2>
              <p>
                Lütfen salınım değerlerini hesaplamak için aşağıdaki alanı
                doldurun:
              </p>
            </div>
            {/* Girdi alanı inputs */}
            <div>
              <div className="m-3">
                <label htmlFor="facility-id">Facility Id</label>
                <select
                  className="form-select arrow-color "
                  id="facility-id"
                  aria-label="Default select example"
                  style={{
                    border: "2px solid #0D1840",
                    borderRadius: "8px 8px 35px 8px",
                  }}
                  required
                >
                  <option value="">Seçiniz</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          {/* Sonuç alanı */}
          <div className="col-6">
            <div>
              <h2 className="border-dark border-bottom w-50">SONUÇ ALANI</h2>
              <p>
                Girdi Alanı'nda girdiğiniz değerlere göre salınan gaz miktarları
                aşağıdaki gibidir.
              </p>
            </div>
            <div className="input-group mb-3 w-75">
              <div class="input-resim">
                <img src={weather} alt="mavi-amblem" />
                <div class="centered">
                  CO<sub>2</sub>
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with segmented dropdown button"
                style={{ borderRadius: "8px 22px 22px 8px" }}
              />
            </div>
            <div className="input-group mb-3 w-75">
              <div class="input-resim">
                <img src={weather} alt="mavi-amblem" />
                <div class="centered">
                  CH<sub>4</sub>
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with segmented dropdown button"
                style={{ borderRadius: "8px 22px 22px 8px" }}
              />
            </div>
            <div className="input-group mb-3 w-75">
              <div class="input-resim">
                <img src={weather} alt="mavi-amblem" />
                <div class="centered">
                  N<sub>2</sub>O
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with segmented dropdown button"
                style={{ borderRadius: "8px 22px 22px 8px" }}
              />
            </div>
            <div className="input-group mb-3 w-75">
              <div class="input-resim">
                <img src={weather} alt="mavi-amblem" />
                <div class="centered">
                  CO<sub>2</sub>e
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with segmented dropdown button"
                style={{ borderRadius: "8px 22px 22px 8px" }}
              />
            </div>
            <div>
              <button type="reset" className="btn btn-info">
                Sıfırla
              </button>
              <button type="submit" className="btn btn-info">
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
