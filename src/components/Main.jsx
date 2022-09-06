import React, { useState } from "react";
import weather from "../assets/Weather.png";

const Main = () => {
  var maxNumber = 45;
  var randomNumber = Math.floor(Math.random() * maxNumber + 1);
  const [inputs, setInputs] = useState({
    facility_id: "",
    year: "",
    activity: "",
    fuel: "",
    vehicle: "",
    amount: "",
    unit: "",
  });
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  console.log(inputs);
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
                  className="form-select arrow-color p-2 w-75 "
                  id="facility-id"
                  aria-label="Default select example"
                  name="facility_id"
                  style={{
                    border: "2px solid #0D1840",
                    borderRadius: "8px 8px 35px 8px",
                  }}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seçiniz</option>
                  <option value={randomNumber}>{randomNumber}</option>
                </select>
              </div>
              <div className="m-3">
                <label htmlFor="year">Year</label>
                <select
                  className="form-select arrow-color p-2 w-75 "
                  id="year"
                  name="year"
                  aria-label="Default select example"
                  style={{
                    border: "2px solid #0D1840",
                    borderRadius: "8px 8px 35px 8px",
                  }}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seçiniz</option>
                  <option value={new Date().getFullYear()}>
                    {new Date().getFullYear()}
                  </option>
                  <option value={new Date().getFullYear() - 1}>
                    {new Date().getFullYear() - 1}
                  </option>
                  <option value={new Date().getFullYear() - 2}>
                    {new Date().getFullYear() - 2}
                  </option>
                  <option value={new Date().getFullYear() - 3}>
                    {new Date().getFullYear() - 3}
                  </option>
                  <option value={new Date().getFullYear() - 4}>
                    {new Date().getFullYear() - 4}
                  </option>
                </select>
              </div>
              <div className="m-3">
                <label htmlFor="activity-type">Activity Type</label>
                <select
                  className="form-select arrow-color p-2 w-75 "
                  id="activity-type"
                  name="activity"
                  aria-label="Default select example"
                  style={{
                    border: "2px solid #0D1840",
                    borderRadius: "8px 8px 35px 8px",
                  }}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seçiniz</option>
                  <option value="4">Distance Activity</option>
                  <option value="5">Fuel Use</option>
                </select>
              </div>
              <div className="m-3">
                <label htmlFor="fuel-source">Fuel Source</label>
                <select
                  className="form-select arrow-color p-2 w-75 "
                  id="fuel-source"
                  name="fuel"
                  aria-label="Default select example"
                  style={{
                    border: "2px solid #0D1840",
                    borderRadius: "8px 8px 35px 8px",
                  }}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seçiniz</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="m-3">
                <label htmlFor="vehicle-type">Vehicle Type</label>
                <select
                  className="form-select arrow-color p-2 w-75 "
                  id="vehicle-type"
                  name="vehicle"
                  aria-label="Default select example"
                  style={{
                    border: "2px solid #0D1840",
                    borderRadius: "8px 8px 35px 8px",
                  }}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seçiniz</option>
                  <option value="1">1</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="m-3">
                <div className="input-group mb-3 w-75">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="text input with dropdown button"
                    name="amount"
                    style={{
                      border: "2px solid #0D1840",
                      borderRight: "none",
                      borderRadius: "8px 0 0 8px",
                    }}
                    value={inputs.amount}
                    placeholder="Giriniz"
                    onChange={handleChange}
                  />
                  <select
                    className="form-select arrow-color p-2  "
                    id="facility-id"
                    aria-label="Default select example"
                    name="unit"
                    style={{
                      border: "2px solid #0D1840",
                      borderLeft: "none",
                      borderRadius: "0 8px 35px 0",
                    }}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seçiniz</option>
                    <option value="1">oo</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
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
              <div className="input-resim">
                <img src={weather} alt="mavi-amblem" />
                <div className="centered">
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
              <div className="input-resim">
                <img src={weather} alt="mavi-amblem" />
                <div className="centered">
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
              <div className="input-resim">
                <img src={weather} alt="mavi-amblem" />
                <div className="centered">
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
              <div className="input-resim">
                <img src={weather} alt="mavi-amblem" />
                <div className="centered">
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
