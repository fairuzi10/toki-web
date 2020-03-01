import React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Button, Navbar, Nav } from "react-bootstrap";

import "./index.scss";

const IndexPage = () => {
  const {
    file: {
      childImageSharp: { fluid }
    }
  } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "IOI2017.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        className="my-navbar"
      >
        <Navbar.Brand href="#home">
          TIM OLIMPIADE KOMPUTER INDONESIA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/">HALL OF FAME</Nav.Link>
            <Nav.Link href="/">CALENDAR</Nav.Link>
            <Nav.Link href="/">DOWNLOADS</Nav.Link>
            <Nav.Link href="/">CONTACTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Img fluid={fluid} />
      <div className="p-4 row no-gutters">
        <div className="col-12 mb-2">ABOUT US</div>
        <div className="col-6 mb-2">
          Tim Olimpiade Komputer Indonesia, atau yang sering disingkat “TOKI”,
          adalah sebuah tim yang terdiri dari siswa-siswa terbaik sekolah
          menengah di Indonesia yang dipersiapkan khusus untuk mewakili
          Indonesia bertanding dalam ajang olimpiade informatika tingkat
          internasional.
        </div>
        <div className="col-12">
          <Link to="#">
            <Button variant="outline-secondary">READ MORE</Button>
          </Link>
        </div>
      </div>
      <footer className="text-center bg-light p-5">
        <div>TIM OLIMPIADE KOMPUTER INDONESIA</div>
        <div>
          Materi OSK/OSP - BUKU PEMROGRAMAN KOMPETITIF DASAR - BEBRAS INDONESIA
          CHALLENGE
        </div>
        <div>FOLLOW US</div>
      </footer>
    </Layout>
  );
};

export default IndexPage;
