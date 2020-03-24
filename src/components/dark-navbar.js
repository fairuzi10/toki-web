import React, { useState } from "react";
import { Nav, Navbar as BNavbar } from "react-bootstrap";
import { useWindowScroll, useWindowSize } from "react-use";
import Link from "../components/link";
import { breakpoints } from "../config";
import logo from "../img/LogoTOKINav.png";
import url from "../urls";

const NavLink = props => <Link className="nav-link" {...props} />;

const DarkNavbar = ({ location }) => {
  const [isToggled, setIsToggled] = useState(false);
  const { height, width } = useWindowSize();
  const { y } = useWindowScroll();
  const heroPageHeight = width >= breakpoints.lg ? height : 0.6 * width;
  const darkRatio = isToggled ? 1 : Math.min(1, y / heroPageHeight);

  return (
    <BNavbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      className={`toki-navbar dark-navbar`}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 
          ${darkRatio * 0.8}))`
      }}
      onToggle={toggled => setIsToggled(toggled)}
    >
      <Link className="navbar-brand" to={url.HOME}>
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
          <NavLink to={url.HOME} disabled={location.pathname === url.HOME}>
            HOME
          </NavLink>
          <NavLink
            to={url.HALL_OF_FAME}
            disabled={location.pathname === url.HALL_OF_FAME}
          >
            HALL OF FAME
          </NavLink>
          <NavLink
            to={url.CALENDAR}
            disabled={location.pathname === url.CALENDAR}
          >
            CALENDAR
          </NavLink>
          <NavLink
            to={url.DOWNLOADS}
            disabled={location.pathname === url.DOWNLOADS}
          >
            DOWNLOADS
          </NavLink>
          <NavLink to={url.toBlog(1)}>STORIES</NavLink>
        </Nav>
      </BNavbar.Collapse>
    </BNavbar>
  );
};
export default DarkNavbar;
