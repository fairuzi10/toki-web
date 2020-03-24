import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import queryString from "query-string";
import React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import LightNavbar from "../components/light-navbar";
import Link from "../components/link";
import { APIO, IOI, medalColor, medalType } from "../data/hall-of-fame";
import "../styles/global.scss";
import "./hall-of-fame.scss";

const competitionType = {
  IOI: "IOI",
  APIO: "APIO"
};

const MedalAggregate = ({ competition, participants }) => {
  const countMedal = countedMedal =>
    participants.reduce(
      (acc, participant) => acc + (participant.medal === countedMedal ? 1 : 0),
      0
    );
  const aggregatedMedals = [
    { type: medalType.GOLD, verboseName: "Emas" },
    { type: medalType.SILVER, verboseName: "Perak" },
    { type: medalType.BRONZE, verboseName: "Perunggu" }
  ];
  return (
    <div className="row justify-content-center mt-3">
      <div className="col-9 col-sm-6 col-md-3">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <td colSpan="2">{`Perolehan Medali ${competition}`}</td>
            </tr>
          </thead>
          <tbody>
            {aggregatedMedals.map(medal => (
              <tr key={medal.type}>
                <td>
                  <span style={{ color: medalColor[medal.type] }}>
                    <FontAwesomeIcon icon={faMedal} />
                  </span>
                  {medal.verboseName}
                </td>
                <td>{countMedal(medal.type)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const competitionData = {
  [competitionType.IOI]: IOI,
  [competitionType.APIO]: APIO
};

const HallOfFame = ({ data, location }) => {
  const pathname = location.pathname;
  const query = queryString.parse(location.search);
  const selectedCompetition = query["competition"] || competitionType.IOI;
  const selectedCompetitionData = competitionData[selectedCompetition];
  const selectedCompetitionParticipants = selectedCompetitionData.reduce(
    (acc, competitionInstance) => acc.concat(competitionInstance.participants),
    []
  );

  const { logos } = data;
  const logoOfCompetitionYear = logos.edges.reduce((acc, logoNode) => {
    const name = logoNode.node.name;
    acc[name] = logoNode.node.childImageSharp.fixed;
    return acc;
  }, {});
  const selectedLogoPrefix = `${selectedCompetition}Logo`;

  return (
    <Layout>
      <LightNavbar location={location} />

      <div className="container fluid offset-navbar">
        <div className="text-bold text-center py-4">
          <div>
            <span className="text-3">HALL </span>
            <span className="text-2">OF</span>
            <span className="text-3"> FAME</span>
          </div>
          <div className="text-1">
            <Link
              to={`${pathname}?competition=IOI`}
              className={`switch-competition-button ${
                selectedCompetition === "IOI" ? "active" : ""
              }`}
            >
              IOI
            </Link>
            <Link
              to={`${pathname}?competition=APIO`}
              className={`switch-competition-button ${
                selectedCompetition === "APIO" ? "active" : ""
              }`}
            >
              APIO
            </Link>
          </div>
          {
            <MedalAggregate
              competition={selectedCompetition}
              participants={selectedCompetitionParticipants}
            />
          }
          {selectedCompetitionData.map(competitionInstance => (
            <div key={competitionInstance.year}>
              <div className="mt-3 text-grey1">
                <b>{`${selectedCompetition} ${competitionInstance.year} - ${
                  competitionInstance.city
                    ? `${competitionInstance.city}, `
                    : ""
                }${competitionInstance.country}`}</b>
              </div>
              <Img
                fixed={
                  logoOfCompetitionYear[
                    selectedLogoPrefix + competitionInstance.year
                  ]
                }
                className="my-1"
              />
              <div>
                {competitionInstance.participants.map(participant => {
                  const medal = (
                    <span style={{ color: medalColor[participant.medal] }}>
                      <FontAwesomeIcon icon={faMedal} />
                    </span>
                  );
                  return (
                    <div
                      className="text-grey2"
                      key={`${competitionInstance.year} ${participant.name}`}
                    >
                      {medal} {participant.name}, {participant.school}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    logos: allFile(filter: { name: { regex: "/(IOI|APIO)Logo/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(height: 75) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

export default HallOfFame;
