import React from "react";
import { Nav, Navbar as BNavbar } from "react-bootstrap";
import "./light-navbar.scss";

const LightNavbar = ({ navbarImage }) => {
  return (
    <BNavbar
      collapseOnSelect
      expand="lg"
      variant="light"
      fixed="top"
      className={`toki-navbar light-navbar`}
    >
      <BNavbar.Brand href="#home">
        TIM OLIMPIADE KOMPUTER INDONESIA
      </BNavbar.Brand>
      <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
      <BNavbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/">HALL OF FAME</Nav.Link>
          <Nav.Link href="/">CALENDAR</Nav.Link>
          <Nav.Link href="/">DOWNLOADS</Nav.Link>
          <Nav.Link href="/">CONTACTS</Nav.Link>
        </Nav>
      </BNavbar.Collapse>
    </BNavbar>
  );
};
export default LightNavbar;
