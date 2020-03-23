import { Link } from "gatsby";
import React from "react";
import { Nav, Navbar as BNavbar } from "react-bootstrap";
import "./light-navbar.scss";
import logo from "../img/LogoTOKINav.png";

const NavLink = props => <Link className="nav-link" {...props} />;

const LightNavbar = ({ navbarImage }) => {
  return (
    <BNavbar
      collapseOnSelect
      expand="lg"
      variant="light"
      fixed="top"
      className={`toki-navbar light-navbar`}
    >
      <Link to="/" className="navbar-brand">
        <img
          src={logo}
          width="45"
          height="45"
          className="d-inline-block align-top"
          alt="Logo TOKI"
        />
      </Link>
      <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
      <BNavbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/hall-of-fame">HALL OF FAME</NavLink>
          <NavLink to="/calendar">CALENDAR</NavLink>
          <NavLink to="/downloads">DOWNLOADS</NavLink>
          <NavLink to="/">CONTACTS</NavLink>
        </Nav>
      </BNavbar.Collapse>
    </BNavbar>
  );
};
export default LightNavbar;
