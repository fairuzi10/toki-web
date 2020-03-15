import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { Button, Nav, Navbar, Row, Col, Container } from "react-bootstrap";
import Layout from "../components/Layout";
import "./index.scss";

const IndexPage = props => {
  const { data } = props;
  console.log(data);
  const landingImage = data.file.childImageSharp.fluid;
  const blogPosts = data.allMarkdownRemark.edges;

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
      <Img fluid={landingImage} />
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
      <Container fluid>
        <Row>
          {blogPosts.map(edge => {
            const blogPost = edge.node;
            return (
              <Col xs="6" key={blogPost.fields.slug}>
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
                      <button className="my-button">READ MORE</button>
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "IOI2017.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
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
            description
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
