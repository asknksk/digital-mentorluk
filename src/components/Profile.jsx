import React from "react";
import profile_img from "../assets/Rectangle 693.png";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center bg-info p-3">
        <img
          src={profile_img}
          alt="profil-resmi"
          className="card-img-top rounded-circle"
          style={{
            border: "1px solid #1c3E94",
            borderRadius: "95px",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        />
        <div className="montserrat mt-2">
          <h5>Murat Turan</h5>
          <p>Tedarik Zinciri Yöneticisi</p>
        </div>
      </div>

      <div className="list-group">
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
      </div>
    </>
  );
};

export default Profile;
