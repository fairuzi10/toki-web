import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import queryString from "query-string";
import React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import LightNavbar from "../components/light-navbar";
import { IOI, APIO, medalColor, medalType } from "../data/hall-of-fame";
import "../styles/global.scss";

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
              <td colspan="2">{`Perolehan Medali ${competition}`}</td>
            </tr>
          </thead>
          <tbody>
            {aggregatedMedals.map(medal => (
              <tr>
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

const HallOfFame = ({ location }) => {
  const pathname = location.pathname;
  const query = queryString.parse(location.search);
  const selectedCompetition = query["competition"] || competitionType.IOI;
  const selectedCompetitionData = competitionData[selectedCompetition];
  const selectedCompetitionParticipants = selectedCompetitionData.reduce(
    (acc, competitionInstance) => acc.concat(competitionInstance.participants),
    []
  );
  return (
    <Layout>
      <LightNavbar />
      <div className="text-bold text-center offset-navbar">
        <div>
          <span className="text-1c5">HALL </span>
          <span>OF</span>
          <span className="text-1c5"> FAME</span>
        </div>
        <div>
          <Link to={`${pathname}?competition=IOI`} className="link-disabled">
            IOI{" "}
          </Link>
          •<Link to={`${pathname}?competition=APIO`}> APIO</Link>
        </div>
        {
          <MedalAggregate
            competition={selectedCompetition}
            participants={selectedCompetitionParticipants}
          />
        }
        {selectedCompetitionData.map(competitionInstance => (
          <>
            <div className="mt-3">
              <b>{`${selectedCompetition} ${competitionInstance.year} - ${
                competitionInstance.city ? competitionInstance.city + ", " : ""
              }${competitionInstance.country}`}</b>
            </div>
            <div>
              {competitionInstance.participants.map(participant => {
                const medal = (
                  <span style={{ color: medalColor[participant.medal] }}>
                    <FontAwesomeIcon icon={faMedal} />
                  </span>
                );
                return (
                  <div className="text-grey2">
                    {medal} {participant.name}, {participant.school}
                  </div>
                );
              })}
            </div>
          </>
        ))}
      </div>
      <Footer />
    </Layout>
  );
};

export default HallOfFame;
