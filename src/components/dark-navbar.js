import { Link } from "gatsby";
import React from "react";
import { Nav, Navbar as BNavbar } from "react-bootstrap";
import "./dark-navbar.scss";

const NavLink = props => <Link className="nav-link" {...props} />;

const DarkNavbar = ({ navbarImage }) => {
  return (
    <BNavbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      className={`toki-navbar dark-navbar`}
    >
      <Link to="/" className="navbar-brand">
        TIM OLIMPIADE KOMPUTER INDONESIA
      </Link>
      <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
      <BNavbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/">HALL OF FAME</NavLink>
          <NavLink to="/">CALENDAR</NavLink>
          <NavLink to="/">DOWNLOADS</NavLink>
          <NavLink to="/">CONTACTS</NavLink>
        </Nav>
      </BNavbar.Collapse>
    </BNavbar>
  );
};
export default DarkNavbar;
