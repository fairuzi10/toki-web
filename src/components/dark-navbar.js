import { Link } from "gatsby";
import React, { useState } from "react";
import { Nav, Navbar as BNavbar } from "react-bootstrap";
import "./dark-navbar.scss";
import { useScrollPosition } from "../hooks/scroll-position";
import useWindowDimensions from "../hooks/window-dimensions";
import logo from "../img/LogoTOKINav.png";

const NavLink = props => <Link className="nav-link" {...props} />;

const DarkNavbar = ({ navbarImage }) => {
  const [navStyle, setNavStyle] = useState({
    background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))"
  });

  const { height, width } = useWindowDimensions();
  const heroPageHeight = (width > 991) ? height : (0.6 * width)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isTransluscent = currPos.y > -heroPageHeight;

      const shouldBeStyle = {
        background: isTransluscent
          ? "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))"
          : "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))"
      };

      if (JSON.stringify(shouldBeStyle) === JSON.stringify(navStyle)) return;

      setNavStyle(shouldBeStyle);
    },
    [navStyle]
  );

  return (
    <BNavbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      className={`toki-navbar dark-navbar`}
      style={{ ...navStyle }}
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
export default DarkNavbar;
