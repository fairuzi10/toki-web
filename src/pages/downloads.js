import { graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/footer";
import Layout from "../components/layout";
import LightNavbar from "../components/light-navbar";
import Link from "../components/link";
import url from "../urls";
import "./downloads.scss";

const Downloads = props => {
  const { data, location } = props;
  const BackgroundBooks = data.booksBackground.childImageSharp.fluid;
  const BackgroundArchive = data.archiveBackground.childImageSharp.fluid;
  const BackgroundNews = data.newsBackground.childImageSharp.fluid;

  return (
    <Layout>
      <LightNavbar location={location} />
      <div className="content downloads">
        <div className="text-bold text-center offset-navbar">
          <h3 className="text-2 title-downloads">DOWNLOADS</h3>
        </div>
        <Container fluid>
          <div className="row align-items-center">
            <div className="col-12 col-lg-4">
              <BackgroundImage fluid={BackgroundBooks} className="bg-download">
                <div>
                  <h5>TOKI BOOKS</h5>
                  <Link to={url.PKD_BOOK}>
                    <button className="toki-button">MORE</button>
                  </Link>
                </div>
              </BackgroundImage>
            </div>
            <div className="col-12 col-lg-4">
              <BackgroundImage
                fluid={BackgroundArchive}
                className="bg-download"
              >
                <h5>PROBLEMSETS ARCHIVES</h5>
                <Link to="/">
                  <button className="toki-button">MORE</button>
                </Link>
              </BackgroundImage>
            </div>
            <div className="col-12 col-lg-4">
              <BackgroundImage fluid={BackgroundNews} className="bg-download">
                <h5>TOKI NEWS</h5>
                <Link to="/">
                  <button className="toki-button">MORE</button>
                </Link>
              </BackgroundImage>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </Layout>
  );
};

export default Downloads;

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
