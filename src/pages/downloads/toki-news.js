import { faDownload, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql } from "gatsby";
import React from "react";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import LightNavbar from "../../components/light-navbar";
import "../../styles/global.scss";
import "./toki-news.scss";

const TOKINews = ({ data }) => {
  return (
    <Layout>
      <LightNavbar />
      <div className="container offset-navbar mb-4 content">
        <h1 className="offset-navbar text-center pt-4 pb-3">
          Download TOKI News
        </h1>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            {data.allTOKINews.edges.map(TOKINewsNode => {
              const file = TOKINewsNode.node;
              return (
                <div className="toki-news-box" key={file.publicURL}>
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="text-danger mr-3"
                    size="2x"
                  />
                  <span className="toki-news-name">{file.name}</span>{" "}
                  <div className="mr-auto" />
                  <a href={file.publicURL} className="toki-button">
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
    allTOKINews: allFile(
      filter: { name: { regex: "/TOKI News/" } }
      sort: { fields: [name], order: DESC }
    ) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`;

export default TOKINews;
