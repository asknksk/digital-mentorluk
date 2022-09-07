import React from "react";
import profile_img from "../assets/Rectangle 693.png";
import { Link } from "react-router-dom";
import { AiOutlinePieChart, AiOutlineUser } from "react-icons/ai";
import { BiGridAlt } from "react-icons/bi";
import { IoDocumentOutline, IoSettingsOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { RiUserLine, RiRotateLockLine } from "react-icons/ri";
import timLogo from "../assets/TIM_LOGO_TR.png";
const Profile = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center bg-info m-0 px-0 py-5 ">
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
      <div className="p-3 roboto-font list-section">
        <div>
          <h3
            className="text-start"
            style={{ fontSize: "0.9rem", fontWeight: "700", color: "#868E96" }}
          >
            MENÜ
          </h3>
          <ul className="text-decoration-none text-start py-0 px-3">
            <li className="list-unstyled ">
              <Link
                to={"/egitim"}
                className="text-decoration-none"
                style={{
                  color: "#343A40",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                <span>
                  <AiOutlinePieChart />
                </span>{" "}
                Eğitimler
              </Link>{" "}
            </li>
            <li className="list-unstyled bg-info rounded">
              <Link
                to={"/"}
                className="text-decoration-none text-light"
                style={{
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  
                }}
              >
                <span>
                  <BiGridAlt />{" "}
                </span>{" "}
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
                <span>
                  <IoDocumentOutline />
                </span>{" "}
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
                <span>
                  <AiOutlineUser />
                </span>{" "}
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
                <span>
                  <FiMessageSquare />
                </span>{" "}
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
          <ul className="text-decoration-none text-start py-0 px-3">
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
                <span>
                  <RiUserLine />
                </span>{" "}
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
                <span>
                  <RiRotateLockLine />
                </span>{" "}
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
                <span>
                  <IoSettingsOutline />
                </span>{" "}
                Gizlilik Politikası
              </Link>{" "}
            </li>
          </ul>
        </div>
        <img src={timLogo} alt="" />
      </div>
    </>
  );
};

export default Profile;
