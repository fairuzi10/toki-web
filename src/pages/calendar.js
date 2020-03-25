import "@fullcalendar/core/main.css";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/daygrid/main.css";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import FullCalendar from "@fullcalendar/react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/footer";
import Layout from "../components/layout";
import LightNavbar from "../components/light-navbar";
import "./calendar.scss";
import { GOOGLE_API_KEY } from "../constants";

const calendars = {
  "Holidays in Indonesia": {
    googleCalendarId: "en.indonesian#holiday@group.v.calendar.google.com",
    color: "#e74c3c"
  },
  "TOKI - Local Public Contests": {
    googleCalendarId: "aiho5jhevjd7je1oqpce8ohbm4@group.calendar.google.com",
    color: "#f1c40f"
  },
  "TOKI - International Public Contests": {
    googleCalendarId: "6uqtufomkqj8bqlr5j3ngrli2c@group.calendar.google.com",
    color: "#27ae60"
  },
  "TOKI - Limited Contests": {
    googleCalendarId: "i3f3ksivqrhqidai27978nrnlg@group.calendar.google.com",
    color: "#8e44ad"
  },
  "TOKI - 3rd Party Programming Contests": {
    googleCalendarId: "tfp6d8ljl4p4pcf6jhcqr7bd48@group.calendar.google.com",
    color: "#e67e22"
  },
  "TOKI - TOKI Events": {
    googleCalendarId: "kdfarl1llhmr12dqvuloo2l0hc@group.calendar.google.com",
    color: "#3498db"
  },
  "TOKI - Other Calendars": {
    googleCalendarId: "gq33r08ccklumd601pp4ffgdas@group.calendar.google.com",
    color: "#34495e"
  }
};

const CalendarHeader = ({ name }) => {
  const color = calendars[name].color;
  const encodedId = encodeURIComponent(calendars[name].googleCalendarId);
  return (
    <a
      href={`https://calendar.google.com/calendar/embed?src=${encodedId}&amp;ctz=Asia%2FSingapore`}
      style={{
        color,
        borderBottomColor: color
      }}
      className="calendar-header-link"
    >
      {name}
    </a>
  );
};
CalendarHeader.propTypes = {
  name: PropTypes.string.isRequired
};

const Calendars = props => {
  const { location } = props;

  return (
    <Layout>
      <LightNavbar location={location} />
      <div className="content offset-navbar mb-5">
        <div className="text-bold text-center py-4">
          <h3>Upcoming Events</h3>
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <FullCalendar
                plugins={[dayGridPlugin, googleCalendarPlugin]}
                // restricted based on domain
                googleCalendarApiKey={GOOGLE_API_KEY}
                eventSources={Object.values(calendars)}
              />
              <div className="mt-4">
                <p>
                  <strong>Kalender Tim Olimpiade Komputer Indonesia</strong>.
                  Kalender ini berisi gabungan dari tujuh kalender berikut:
                </p>
                <ol>
                  <li>
                    <CalendarHeader name="Holidays in Indonesia" />
                    <ul>
                      <li>Hari Libur Nasional Indonesia</li>
                    </ul>
                  </li>
                  <li>
                    <CalendarHeader name="TOKI - Local Public Contests" />
                    <ul>
                      <li>
                        Kontes yang diselenggarakan oleh TOKI dan dapat diikuti
                        oleh seluruh anggota komunitas Olimpiade Informatika
                        Indonesia.
                      </li>
                      <li>
                        Soal-soal yang digunakan pada kontes ini mungkin saja
                        hanya disediakan dalam bahasa Indonesia.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <CalendarHeader name="TOKI - International Public Contests" />
                    <ul>
                      <li>
                        Kontes yang diselenggarakan oleh TOKI dan dapat diikuti
                        oleh seluruh anggota komunitas Olimpiade Informatika di
                        seluruh dunia.
                      </li>
                      <li>
                        Soal-soal yang digunakan pada kontes ini mungkin saja
                        juga disediakan dalam bahasa Inggris.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <CalendarHeader name="TOKI - Limited Contests" />
                    <ul>
                      <li>
                        Kontes yang diselenggarakan oleh TOKI dan hanya dapat
                        diikuti dengan pendaftaran khusus, atau kualifikasi
                        sebelumnya.
                      </li>
                      <li>
                        Beberapa contoh kontes dalam kategori ini mencakup
                        Olimpiade Sains Nasional, Pelatihan Nasional TOKI, dan
                        lain lain.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <CalendarHeader name="TOKI - 3rd Party Programming Contests" />
                    <ul>
                      <li>
                        Kontes yang bukan diselenggarakan oleh TOKI, namun
                        secara resmi diketahui dan/atau diikuti oleh TOKI.
                      </li>
                      <li>
                        Beberapa contoh kontes dalam kategori ini mencakup
                        International Olympiad in Informatics, Asia-Pacific
                        Olympiad in Informatics, dan lain lain.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <CalendarHeader name="TOKI - TOKI Events" />
                    <ul>
                      <li>
                        Kegiatan TOKI atau IA-TOKI yang bukan merupakan kontes
                        pemrograman.
                      </li>
                      <li>
                        Beberapa contoh kegiatan dalam kategori ini mencakup
                        TOKI Gathering, IA-TOKI Camp, dan lain lain.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <CalendarHeader name="TOKI - Other Calendars" />
                    <ul>
                      <li>
                        Kegiatan-kegiatan lainnya yang tidak termasuk dalam
                        kalender manapun yang sudah disebutkan di atas.
                      </li>
                    </ul>
                  </li>
                </ol>
                <p>
                  Ingin menampilkan acara Anda ke dalam kalender ini? Kirimkan
                  email ke{" "}
                  <a href="mailto:scientific+calendar@toki.or.id">
                    scientific+calendar@toki.or.id
                  </a>{" "}
                  dengan cc ke{" "}
                  <a href="mailto:info@toki.or.id">info@toki.or.id</a>.
                </p>
                <hr />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
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
