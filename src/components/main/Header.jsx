import React from "react";
import { VscBellDot } from "react-icons/vsc";
import karakterErkek from "../../assets/karakter-erkek.png";
// VscBellDot

const Header = () => {
  return (
    <>
      <div className="col-3 d-flex justify-content-between">
        <span className="bell">
          <VscBellDot />
        </span>
        <img
          src={karakterErkek}
          alt="erkek-karakter"
          style={{ borderRadius: "0 0 0 50px" }}
        />
        <div className="d-flex align-items-end">
          <select name="" id="" className="border-0">
            <option value="1">Dijital Mentor</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
      <div className="col-9 fst-italic text-start roboto-font pb-2 m-0">
        <h3 className="m-0">Merhaba Murat Bey</h3>
        <p className="m-0">
          Talep etmiş olduğunuz tedarik zinciri raporunu oluşturdum. Bu alana
          tıklayarak rapora erişim sağlayabiliriniz.
        </p>
      </div>
    </>
  );
};

export default Header;
