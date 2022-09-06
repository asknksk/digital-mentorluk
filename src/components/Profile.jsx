import React from "react";
import profile_img from "../assets/Rectangle 693.png";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center bg-info w-100">
        <img
          src={profile_img}
          alt="profil-resmi"
          className="card-img-top rounded-circle"
          style={{
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        />
        <div className="text-light montserrat  mt-2">
          <h5
            className="fw-bolder"
            style={{
              fontWeight: "700",
              fontSize: "0.9rem",
              lineHeight: "1rem",
            }}
          >
            Murat Turan
          </h5>
          <p
            className=""
            style={{
              fontSize: "0.9rem",
              fontWeight: "400",
              lineHeight: "1rem",
            }}
          >
            Tedarik Zinciri Yöneticisi
          </p>
        </div>
      </div>
      <div className="p-3 roboto-font">
        <div>
          <h3
            className="text-start"
            style={{ fontSize: "0.9rem", fontWeight: "700", color: "#868E96" }}
          >
            MENÜ
          </h3>
          <ul className="text-decoration-none text-start">
            <li className="list-unstyled">
              <Link
                to={"/"}
                className="text-decoration-none"
                style={{
                  color: "#343A40",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Eğitimler
              </Link>{" "}
            </li>
            <li className="list-unstyled">
              <Link
                to={"/"}
                className="text-decoration-none"
                style={{
                  color: "#343A40",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Analiz
              </Link>{" "}
            </li>
            <li className="list-unstyled">
              <Link
                to={"/"}
                className="text-decoration-none"
                style={{
                  color: "#343A40",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Raporlar
              </Link>{" "}
            </li>
            <li className="list-unstyled">
              <Link
                to={"/"}
                className="text-decoration-none"
                style={{
                  color: "#343A40",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Profil
              </Link>{" "}
            </li>
            <li className="list-unstyled">
              <Link
                to={"/"}
                className="text-decoration-none"
                style={{
                  color: "#343A40",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                TİM'e Yaz
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div>
          <h3
            className="text-start"
            style={{ fontSize: "0.9rem", fontWeight: "700", color: "#868E96" }}
          >
            TERCİHLER
          </h3>
          <ul className="text-decoration-none text-start">
            <li className="list-unstyled">
              <Link
                to={"/"}
                className="text-decoration-none"
                style={{
                  color: "#343A40",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Yetkilendirme
              </Link>{" "}
            </li>
            <li className="list-unstyled">
              <Link
                to={"/"}
                className="text-decoration-none"
                style={{
                  color: "#343A40",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Şifremi Değiştir
              </Link>{" "}
            </li>
            <li className="list-unstyled">
              <Link
                to={"/"}
                className="text-decoration-none"
                style={{
                  color: "#343A40",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Gizlilik Politikası
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="list-group">
        <Link to="#" className="list-group-item list-group-item-action active">
          Cras justo odio
        </Link>
        <Link to="#" className="list-group-item list-group-item-action">
          Dapibus ac facilisis in
        </Link>
        <Link to="#" className="list-group-item list-group-item-action">
          Dapibus ac facilisis in
        </Link>
        <Link to="#" className="list-group-item list-group-item-action">
          Dapibus ac facilisis in
        </Link>
        <Link to="#" className="list-group-item list-group-item-action">
          Dapibus ac facilisis in
        </Link>
      </div> */}
    </>
  );
};

export default Profile;
