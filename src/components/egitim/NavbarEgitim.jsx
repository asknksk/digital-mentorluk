import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import inovVector from "../../assets/egitim/inovatim-vector.png";
import timLogo from "../../assets/TIM_LOGO_TR.png";

const NavbarEgitim = () => {
  return (
    <Navbar
      sticky="top"
      id="navbar"
      expand="lg"
      className="navbar navbar-expand-lg "
      style={{ background: "white", width: "100%" }}
      collapseOnSelect={true}
    >
      <Navbar.Brand href="#home">
        <img src={inovVector} alt="inovatim" className="invovvector-img"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="ml-auto  text-center m-auto" variant="tabs">
          <Nav.Item className="mx-5">
            <Nav.Link eventKey="1" as={Link} to="/">
              ANASAYFA
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-5">
            <Nav.Link eventKey="2" as={Link} to="/">
              CHAT
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-5">
            <Nav.Link eventKey="3" as={Link} to="/">
              PUANLAR
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-5">
            <Nav.Link eventKey="4" as={Link} to="/egitim">
              EĞİTİM
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="#home">
        <img src={timLogo} alt="timlogo" />
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarEgitim;
