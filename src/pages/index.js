import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DarkNavbar from "../components/dark-navbar";
import Footer from "../components/footer";
import Layout from "../components/layout";
import { breakpoints } from "../config";
import useWindowDimensions from "../hooks/window-dimensions";
import "./index.scss";

const IndexPage = props => {
  const { data } = props;
  const { width } = useWindowDimensions();
  const landingImage =
    width < breakpoints.md
      ? data.mobileLandingImage.childImageSharp.fluid
      : data.desktopLandingImage.childImageSharp.fluid;
  const blogPosts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <DarkNavbar />
      <Img fluid={landingImage} />
      <div className="p-4 row no-gutters">
        <div className="col-12 mb-2">ABOUT US</div>
        <div className="col-12 col-md-6 mb-2">
          Tim Olimpiade Komputer Indonesia, atau yang sering disingkat “TOKI”,
          adalah sebuah tim yang terdiri dari siswa-siswa terbaik sekolah
          menengah di Indonesia yang dipersiapkan khusus untuk mewakili
          Indonesia bertanding dalam ajang olimpiade informatika tingkat
          internasional.
        </div>
        <div className="col-12">
          <Link to="/about">
            <button className="toki-button">READ MORE</button>
          </Link>
        </div>
      </div>
      <Container fluid>
        <Row>
          {blogPosts.map(edge => {
            const blogPost = edge.node;
            return (
              <Col xs="12" md="6" key={blogPost.fields.slug}>
                <div className="mx-1 mb-3 blog-post">
                  <Img
                    fluid={
                      blogPost.frontmatter.featuredimage.childImageSharp.fluid
                    }
                    className="mb-3"
                  />
                  <div className="p-3">
                    <h3 className="text-grey2">{blogPost.frontmatter.title}</h3>
                    <div className="text-grey1 mb-2">{blogPost.excerpt}</div>
                    <Link to={blogPost.fields.slug}>
                      <button className="toki-button">READ MORE</button>
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    mobileLandingImage: file(relativePath: { eq: "IOI2017.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopLandingImage: file(relativePath: { eq: "IOI2017.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 300, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
