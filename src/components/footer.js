import { Link } from "gatsby";
import React from "react";
import facebookLogo from "../img/facebookLogo.png";
import instagramLogo from "../img/instagramLogo.png";
import youtubeLogo from "../img/youtubeLogo.png";
import url from "../urls";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="text-center bg-light p-5">
      <div className="footer-title">TIM OLIMPIADE KOMPUTER INDONESIA</div>
      <div className="footer-link">
        <Link to={url.OSN_SYLLABUS} className="footer-link">
          MATERI OSK/OSP
        </Link>{" "}
        &#8226;{" "}
        <Link to={url.PKD_BOOK} className="footer-link">
          BUKU PEMROGRAMAN KOMPETITIF DASAR
        </Link>{" "}
        &#8226;{" "}
        <a
          href={url.BEBRAS}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          BEBRAS INDONESIA CHALLENGE
        </a>{" "}
        &#8226;{" "}
        <Link to={url.CONTACTS} className="footer-link">
          CONTACTS
        </Link>
      </div>
      <div className="footer-follow">FOLLOW US</div>
      <div>
        <a href={url.FACEBOOK} target="_blank" rel="noopener noreferrer">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href={url.INSTAGRAM} target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram" />
        </a>
        <a href={url.YOUTUBE} target="_blank" rel="noopener noreferrer">
          <img src={youtubeLogo} alt="Youtube" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
