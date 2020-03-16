import React from "react";
import Layout from "../components/layout";
import LightNavbar from "../components/light-navbar";
import Footer from "../components/footer";
import "../styles/global.scss";

const About = () => {
  return (
    <Layout>
      <LightNavbar />
      <h1 className="offset-navbar text-center">About Us</h1>
      <Footer />
    </Layout>
  );
};

export default About;
