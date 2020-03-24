import React from "react";
import "./footer.scss";
import { Link } from "gatsby";
import styled from "styled-components";
import facebookLogo from "../img/facebookLogo.png";
import instagramLogo from "../img/instagramLogo.png";
import youtubeLogo from "../img/youtubeLogo.png";

const Footer = props => {
  const StyledLink = styled(props => <Link {...props} />)`
    color: #555555c0;
  `;

  return (
    <footer className="text-center bg-light p-5">
      <div className="footer-title">TIM OLIMPIADE KOMPUTER INDONESIA</div>
      <div className="footer-link">
        <StyledLink to="/silabus-materi-osn" className="link">
          MATERI OSK/OSP
        </StyledLink>
        &#8226;
        <StyledLink
          to="/downloads/buku-pemrograman-kompetitif-dasar"
          className="link"
        >
          BUKU PEMROGRAMAN KOMPETITIF DASAR
        </StyledLink>
        &#8226;
        <a
          href="http://bebras.or.id/v3/"
          target="_blank"
          style={{ color: "#555555c0" }}
        >
          BEBRAS INDONESIA CHALLENGE
        </a>
        &#8226;
        <StyledLink to="/" className="link">
          CONTACTS
        </StyledLink>
      </div>
      <div className="footer-follow">FOLLOW US</div>
      <p>
        <a href="https://www.facebook.com/olimpinformatika/" target="_blank">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/olimpinformatika/" target="_blank">
          <img src={instagramLogo} alt="Instagram" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCe1X38BE3kIjsoxqv2r8oog"
          target="_blank"
        >
          <img src={youtubeLogo} alt="Youtube" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
