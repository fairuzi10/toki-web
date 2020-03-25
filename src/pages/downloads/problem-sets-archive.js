import {
  faDownload,
  faFilePdf,
  faFileArchive
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql } from "gatsby";
import React from "react";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import LightNavbar from "../../components/light-navbar";
import "../../styles/global.scss";
import "./problem-sets-archive.scss";

const FileIcon = ({ ext }) => {
  return ext === ".pdf" ? (
    <FontAwesomeIcon icon={faFilePdf} className="text-danger mr-3" size="2x" />
  ) : (
    <FontAwesomeIcon
      icon={faFileArchive}
      className="text-success mr-3"
      size="2x"
    />
  );
};

const ProblemSetsArchive = ({ data }) => {
  return (
    <Layout>
      <LightNavbar />
      <div className="container-fluid px-5 offset-navbar mb-4 content">
        <h1 className="offset-navbar text-center pt-4 pb-3">
          Download Problem Sets
        </h1>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-4">
            <h4 className="text-center mt-3">Olimpiade Sains Kota/Kabupaten</h4>
            {data.allOSK.edges.map(OSKNode => {
              const file = OSKNode.node;
              return (
                <div className="problem-set-box" key={file.publicURL}>
                  <FileIcon ext={file.ext} />
                  <span className="problem-set-name">{file.name}</span>{" "}
                  <div className="mr-auto" />
                  <a href={file.publicURL} className="toki-button button-sm">
                    <FontAwesomeIcon icon={faDownload} className="mr-2" />
                    DOWNLOAD
                  </a>
                </div>
              );
            })}
          </div>
          <div className="col-12 col-lg-4">
            <h4 className="text-center mt-3">Olimpiade Sains Provinsi</h4>
            {data.allOSP.edges.map(OSPNode => {
              const file = OSPNode.node;
              return (
                <div className="problem-set-box" key={file.publicURL}>
                  <FileIcon ext={file.ext} />
                  <span className="problem-set-name">{file.name}</span>{" "}
                  <div className="mr-auto" />
                  <a href={file.publicURL} className="toki-button button-sm">
                    <FontAwesomeIcon icon={faDownload} className="mr-2" />
                    DOWNLOAD
                  </a>
                </div>
              );
            })}
          </div>
          <div className="col-12 col-lg-4">
            <h4 className="text-center mt-3">Olimpiade Sains Nasional</h4>
            {data.allOSN.edges.map(OSNNode => {
              const file = OSNNode.node;
              return (
                <div className="problem-set-box" key={file.publicURL}>
                  <FileIcon ext={file.ext} />
                  <span className="problem-set-name">{file.name}</span>{" "}
                  <div className="mr-auto" />
                  <a href={file.publicURL} className="toki-button button-sm">
                    <FontAwesomeIcon icon={faDownload} className="mr-2" />
                    DOWNLOAD
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allOSK: allFile(
      filter: { name: { regex: "/OSK [0-9]+/" } }
      sort: { fields: [name], order: DESC }
    ) {
      edges {
        node {
          name
          ext
          publicURL
        }
      }
    }
    allOSP: allFile(
      filter: { name: { regex: "/OSP [0-9]+/" } }
      sort: { fields: [name], order: DESC }
    ) {
      edges {
        node {
          name
          ext
          publicURL
        }
      }
    }
    allOSN: allFile(
      filter: { name: { regex: "/OSN [0-9]+/" } }
      sort: { fields: [name], order: DESC }
    ) {
      edges {
        node {
          name
          ext
          publicURL
        }
      }
    }
  }
`;

export default ProblemSetsArchive;
