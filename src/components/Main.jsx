import axios from "axios";
import React, { useEffect, useState } from "react";
import weather from "../assets/Weather.png";
import TablePage from "./main/TablePage";
import uuid from "react-uuid";

const sorguUrl = process.env.REACT_APP_SORGU_URL; //activity=4&fuel=60&amount=600&unit=8&vehicle=3&facility_id=1&year=2022
const fullTypeUrl = process.env.REACT_APP_FUEL_TYPE_URL; // sonuna 4 veya 5 type göre gelecek
const unitsURL = process.env.REACT_APP_UNITS_URL; // sonuna 4/5 type göre gelecek
const emptyInput = {
  facility_id: "",
  year: "",
  activity: "",
  fuel: "",
  vehicle: "",
  amount: "",
  unit: "",
};
const emptySonuc = {
  co2: "",
  ch4: "",
  n2o: "",
  co2e: "",
};

const Main = () => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100 + 1)
  );
  const [inputs, setInputs] = useState({
    facility_id: "",
    year: "",
    activity: "",
    fuel: "",
    vehicle: "",
    amount: "",
    unit: "",
  });

  const [fuelTypes, setFuelTypes] = useState("");
  const [unitTypes, setUnitTypes] = useState("");
  const [sorguSonucu, setSorguSonucu] = useState("");
  //  localStorage state
  const [veriler, setVeriler] = useState(
    JSON.parse(localStorage.getItem("veriler")) || []
  );
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const fetchActivityType = async (activityValue) => {
    try {
      const {
        data: { data },
      } = await axios.get(fullTypeUrl + activityValue);
      setFuelTypes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUnitTypes = async (activityValue) => {
    try {
      const {
        data: { data },
      } = await axios.get(unitsURL + activityValue);
      setUnitTypes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSonucSorgulama = async () => {
    try {
      const newUrl =
        "activity=" +
        inputs["activity"] +
        "&fuel=" +
        inputs["fuel"] +
        "&amount=" +
        inputs["amount"] +
        "&unit=" +
        inputs["unit"] +
        "&vehicle=" +
        inputs["vehicle"] +
        "&facility_id=" +
        inputs["facility_id"] +
        "&year=" +
        inputs["year"];

      const {
        data: { data },
      } = await axios.get(sorguUrl + newUrl);
      // setSorguSonucu(newUrl);
      setSorguSonucu(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (inputs.activity === "4") {
      fetchActivityType("4");
      fetchUnitTypes("4");
    } else if (inputs.activity === "5") {
      fetchActivityType("5");
      fetchUnitTypes("5");
    }
  }, [inputs.activity]);

  useEffect(() => {
    if (
      inputs.activity &&
      inputs.amount &&
      inputs.facility_id &&
      inputs.fuel &&
      inputs.unit &&
      inputs.vehicle &&
      inputs.year
    ) {
      fetchSonucSorgulama();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs]);

  const handleReset = () => {
    setSorguSonucu(emptySonuc);
    setInputs(emptyInput);
  };

  const id = uuid();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (sorguSonucu) {
      const yeniVeriler = {
        id: id,
        facility_id: inputs.facility_id,
        year: inputs.year,
        activity: inputs.activity,
        fuel: inputs.fuel,
        vehicle: inputs.vehicle,
        amount: inputs.amount,
        unit: inputs.unit,
        co2: sorguSonucu["co2"],
        ch4: sorguSonucu["ch4"],
        n2o: sorguSonucu["n2o"],
        co2e: sorguSonucu["co2e"],
      };
      setVeriler([...veriler, yeniVeriler]);
      setRandomNumber(Math.floor(Math.random() * 100 + 1));
      setInputs(emptyInput);
      setSorguSonucu(emptySonuc);
      e.target.reset();
    }
  };

  //  localStorage kısmı
  const handleVeriSil = (id) => {
    const filtered = veriler
      .map((obje) => obje)
      .filter((item) => item.id !== id);
    localStorage.setItem("veriler", JSON.stringify(filtered));
    setVeriler(JSON.parse(localStorage.getItem("veriler")));
  };

  useEffect(() => {
    localStorage.setItem("veriler", JSON.stringify(veriler));
    // handleReset();
  }, [veriler]);

  // console.log(sorguSonucu);
  console.log(inputs);
  return (
    <>
      <div className="bg-white rounded" style={{ height: "103px" }}>
        <div></div>
        <div></div>
      </div>
      <form onSubmit={handleSubmit}>
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
                    {inputs?.activity ? (
                      <>
                        {Object.values(fuelTypes)?.map((item) => {
                          return (
                            <option value={item["id"]} key={uuid()}>
                              {item["name"]}
                            </option>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <option value="">Activity Type Seçiniz</option>
                      </>
                    )}
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
                    {inputs?.fuel ? (
                      <>
                        {Object.keys(fuelTypes)
                          .filter(
                            (item) => fuelTypes[item].id === Number(inputs.fuel)
                          )
                          .map((key) => fuelTypes[key]["vehicles"])[0]
                          ?.map((vehicle) => {
                            return (
                              <>
                                <option value={vehicle["id"]} key={uuid()}>
                                  {vehicle["name"]}
                                </option>
                              </>
                            );
                          })}
                      </>
                    ) : (
                      <>
                        (<option value="">Fuel Source Seçiniz</option>)
                      </>
                    )}
                  </select>
                </div>
                <div className="m-3">
                  <div className="input-group mb-3 w-75">
                    <input
                      type="text"
                      className="form-control"
                      // aria-label="text input with dropdown button"
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

                      {inputs?.activity ? (
                        <>
                          {Object.values(unitTypes)?.map((item) => {
                            return (
                              <option value={item["id"]} key={item["id"]}>
                                {item["name"]}
                              </option>
                            );
                          })}
                        </>
                      ) : (
                        <>
                          <option value="">Activity Type Seçiniz</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* Sonuç alanı */}
            <div className="col-6 p-5">
              <div>
                <h2 className="border-dark border-bottom w-50">SONUÇ ALANI</h2>
                <p>
                  Girdi Alanı'nda girdiğiniz değerlere göre salınan gaz
                  miktarları aşağıdaki gibidir.
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
                  value={sorguSonucu["co2"]}
                  disabled
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
                  value={sorguSonucu["ch4"]}
                  disabled
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
                  value={sorguSonucu["n2o"]}
                  disabled
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
                  value={sorguSonucu["co2e"]}
                  disabled
                />
              </div>
              <div className="text-center">
                <button
                  type="reset"
                  className="btn btn-info form-button m-1"
                  onClick={() => handleReset()}
                >
                  Sıfırla
                </button>
                <button className="btn btn-info form-button m-1">Kaydet</button>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Tablo */}
      {veriler !== [] && (
        <div className="d-flex flex-column ">
          <h2 className="text-bg-light text-start p-2 border-non fs-6">
            hesaplamalar
          </h2>
          <table className="table table-striped table-hover table-bordered text-bg-light p-3 text-center">
            <thead className="tbaslik">
              <tr>
                <th scope="col">Facilty ID</th>
                <th scope="col">Year</th>
                <th scope="col">Fuel</th>
                <th scope="col">Amount of Fuel</th>
                <th scope="col">Units</th>
                <th scope="col">
                  CO<sub>2</sub>
                </th>
                <th scope="col">
                  CH<sub>4</sub>
                </th>
                <th scope="col">
                  N<sub>2</sub>O
                </th>
                <th scope="col">
                  CO<sub>2</sub>e
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {veriler?.map((row) => {
                return (
                  <tr key={row.facility_id}>
                    <TablePage row={row} handleVeriSil={handleVeriSil} />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Main;
