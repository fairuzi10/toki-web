import Link from "gatsby-plugin-transition-link/AniLink";
import React from "react";
import { Nav, Navbar as BNavbar } from "react-bootstrap";
import logo from "../img/LogoTOKINav.png";
import "./dark-navbar.scss";
import { color } from "../config";

const NavLink = props => (
  <Link
    cover
    direction="down"
    bg={color.grey4}
    className="nav-link"
    {...props}
  />
);

const DarkNavbar = ({ navbarImage }) => {
  return (
    <BNavbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      className={`toki-navbar dark-navbar`}
    >
      <Link to="/" paintDrip hex={color.grey1} className="navbar-brand">
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
          <NavLink to="/">CALENDAR</NavLink>
          <NavLink to="/downloads">DOWNLOADS</NavLink>
          <NavLink to="/">CONTACTS</NavLink>
        </Nav>
      </BNavbar.Collapse>
    </BNavbar>
  );
};
export default DarkNavbar;
