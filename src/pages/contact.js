import React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import LightNavbar from "../components/light-navbar";
import "../styles/global.scss";
import "./contact.scss";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({ location, data }) => {
  const emailLogo = <FontAwesomeIcon icon={faEnvelope} className="mr-2" />;
  return (
    <Layout>
      <LightNavbar location={location} />
      <div className="container offset-navbar mb-4 content">
        <h1 className="offset-navbar text-center pt-4">Contact</h1>
        <div className="text-center">
          <div className="contact-section">
            <strong>Informasi Umum TOKI</strong>
            <br />
            <a href="https://toki.or.id">toki.id</a>
            <br />
            {emailLogo}
            <a href="mailto:info@toki.or.id">info@toki.or.id</a>
          </div>
          <div className="contact-section">
            <strong>Informasi Umum IA TOKI</strong>
            <br />
            <a href="http://www.ia-toki.org">www.ia-toki.org</a>
            <br />
            {emailLogo}
            <a href="mailto:info@ia-toki.org">info@ia-toki.org</a>
          </div>
          <hr />
          <div className="contact-section">
            <strong>Koordinator Humas TOKI</strong>
            <br />
            Fauzan Joko Sularto
            <br />
            {emailLogo}
            <a href="mailto:fauzanjs@toki.or.id">fauzanjs@toki.or.id</a>
          </div>
          <div className="contact-section">
            <strong>Koordinator Humas IA TOKI</strong>
            <br />
            Dewi Yuliani
            <br />
            {emailLogo}
            <a href="mailto:dewi@ia-toki.org">dewi@ia-toki.org</a>
          </div>
          <hr />
          <div className="contact-section">
            <strong>Koordinator Pembina TOKI</strong>
            <br />
            Inggriani Liem
            <br />
            {emailLogo}
            <a href="mailto:inge@informatika.org">inge@informatika.org</a>
          </div>
          <div className="contact-section">
            <strong>TOKI Biro Universitas Indonesia</strong>
            <br />
            Yugo Kartono Isal
            <br />
            {emailLogo}
            <a href="mailto:yugo@cs.ui.ac.id">yugo@cs.ui.ac.id</a>
          </div>
          <div className="contact-section">
            <strong>TOKI Biro Institut Teknologi Bandung</strong>
            <br />
            Adi Mulyanto
            <br />
            {emailLogo}
            <a href="mailto:adi@informatika.org">adi@informatika.org</a>
          </div>
          <div className="contact-section">
            <strong>TOKI Biro Institut Pertanian Bogor</strong>
            <br />
            Julio Adisantoso
            <br />
            {emailLogo}
            <a href="mailto:julioipb@gmail.com">julioipb@gmail.com</a>
          </div>
          <div className="contact-section">
            <strong>TOKI Biro Institut Teknologi Sepuluh Nopember</strong>
            <br />
            Yudhi Purwananto
            <br />
            {emailLogo}
            <a href="mailto:purwananto@gmail.com">purwananto@gmail.com</a>
          </div>
          <div className="contact-section">
            <strong>TOKI Biro Universitas Gadjah Mada</strong>
            <br />
            Nur Rokhman
            <br />
            {emailLogo}
            <a href="mailto:nurrokhman@ymail.com">nurrokhman@ymail.com</a>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Contact;
