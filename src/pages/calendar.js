import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LightNavbar from "../components/light-navbar";
import Footer from "../components/footer";
import Layout from "../components/layout";
import "./calendar.scss";
import Calendar from "react-google-calendar-events-list";

const Calendars = props => {
  const { data } = props;

  return (
    <Layout>
      <LightNavbar />
      <div className="text-bold text-center title-download">
        <span className="text-1c5">Upcoming Events</span>
      </div>
      <Container fluid className="text-center">
        <Calendar
          calendarID="tfp6d8ljl4p4pcf6jhcqr7bd48%40group.calendar.google.com"
          apiKey="AIzaSyAunY2R4utMXaWe1uAxIRdcRsbUlI8yhL8"
        />
        <Calendar
          calendarID="qd6imfhsvt10o693p4r104hup8@group.calendar.google.com"
          apiKey="AIzaSyAunY2R4utMXaWe1uAxIRdcRsbUlI8yhL8"
        />
      </Container>
      <div className="filler" />
      <Footer />
    </Layout>
  );
};

export default Calendars;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    booksBackground: file(relativePath: { eq: "downloadBooks.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    archiveBackground: file(relativePath: { eq: "downloadArchive.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    newsBackground: file(relativePath: { eq: "downloadTokiNews.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
