import React from "react";
import { Container } from "react-bootstrap";
import Calendar from "react-google-calendar-events-list";
import Footer from "../components/footer";
import Layout from "../components/layout";
import LightNavbar from "../components/light-navbar";
import "./calendar.scss";

const Calendars = props => {
  const { location } = props;

  return (
    <Layout>
      <LightNavbar location={location} />
      <div className="content calendar">
        <div className="text-bold text-center">
          <h3>Upcoming Events</h3>
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
      </div>
      <Footer />
    </Layout>
  );
};

export default Calendars;
