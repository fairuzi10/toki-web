import { graphql, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Background, Parallax } from "react-parallax";
import DarkNavbar from "../components/dark-navbar";
import Footer from "../components/footer";
import Layout from "../components/layout";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IOI, medalColor } from "../data/hall-of-fame";
import useWindowDimensions from "../hooks/window-dimensions";
import "./index.scss";

const IndexPage = props => {
  const { data } = props;
  const {
    landingImage,
    aboutBackground,
    aboutTOKI,
    achievementBackground,
    achievementLatest,
    pembinaTOKI,
    alumniTOKI,
    syllabusBackground,
    TOKICamp,
    tlxBackground,
    fundamentalsBackground,
    pelatnas3,
    IABackground,
    blogBackground
  } = data;
  const { width } = useWindowDimensions();
  const scaleStrength = width / 1440;
  const rootMargin = "700px";
  const blogPosts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <DarkNavbar />
      {/* Hero Page */}
      {/* No strength scaling is intended */}
      <Parallax strength={100}>
        <div className="landing-image">
          <h1>TIM OLIMPIADE KOMPUTER INDONESIA</h1>
        </div>
        <Background>
          <BackgroundImage
            fluid={landingImage.childImageSharp.fluid}
            style={{ height: "80vw" }}
            className="w-100vw"
            rootMargin={rootMargin}
          />
        </Background>
      </Parallax>
      {/* End of Hero Page */}

      {/* About Us */}
      <BackgroundImage
        fluid={aboutBackground.childImageSharp.fluid}
        style={{ backgroundPosition: "top left" }}
      >
        <Container fluid className="about-us">
          <div className="p-4 row no-gutters">
            <h5 className="col-12 mb-2">ABOUT US</h5>
            <div className="col-12 col-md-6 mb-2">
              Tim Olimpiade Komputer Indonesia, atau yang sering disingkat
              “TOKI”, adalah sebuah tim yang terdiri dari siswa-siswa terbaik
              sekolah menengah di Indonesia yang dipersiapkan khusus untuk
              mewakili Indonesia bertanding dalam ajang olimpiade informatika
              tingkat internasional.
            </div>
            <div className="col-12">
              <Link to="/about">
                <button className="toki-button">READ MORE</button>
              </Link>
            </div>
          </div>
        </Container>
      </BackgroundImage>
      {/* End of About Us */}

      {/* Image after About Us */}
      <Parallax strength={200 * scaleStrength} style={{ height: "30vw" }}>
        <Background>
          <BackgroundImage
            fluid={aboutTOKI.childImageSharp.fluid}
            style={{ height: "40vw" }}
            className="w-100vw"
            rootMargin={rootMargin}
          />
        </Background>
      </Parallax>

      {/* Latest Achievement */}
      <BackgroundImage
        fluid={achievementBackground.childImageSharp.fluid}
        style={{ backgroundPosition: "bottom left" }}
      >
        <Container fluid className="latest-achievement">
          <div className="p-4 row no-gutters">
            <h5 className="col-12 mb-2">LATEST ACHIEVEMENT</h5>
            <div className="col-12 col-md-6 mb-2">
              {IOI[0].participants.map(participant => {
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
            <div className="col-12">
              <Link to="/hall-of-fame/">
                <button className="toki-button">READ MORE</button>
              </Link>
            </div>
          </div>
        </Container>
      </BackgroundImage>
      {/* End of Latest Achievement */}

      <Parallax strength={300 * scaleStrength} style={{ height: "40vw" }}>
        <Background>
          <BackgroundImage
            fluid={achievementLatest.childImageSharp.fluid}
            style={{ height: "80vw" }}
            className="w-100vw"
            rootMargin={rootMargin}
          />
        </Background>
      </Parallax>

      {/* OSK-OSP Syllabus */}
      <BackgroundImage
        fluid={syllabusBackground.childImageSharp.fluid}
        style={{ backgroundPosition: "bottom left" }}
      >
        <Container fluid className="OSK-OSP">
          <div className="p-4 row no-gutters">
            <h5 className="col-12 mb-2">OSK-OSP SYLLABUS</h5>
            <div className="col-12 col-md-3 mb-2">
              Hai para calon peserta OSK dan OSP! Persiapkan dirimu dengan
              mempelajari materi-materi yang dapat kamu akses pada situs
              osn.toki.id.
            </div>
            <div className="col-12">
              <Link to="/">
                <button className="toki-button">VISIT WEB</button>
              </Link>
            </div>
          </div>
        </Container>
      </BackgroundImage>
      {/* End of OSK-OSP Syllabus */}

      {/* Image after OSK-OSP Syllabus */}
      <Parallax strength={150 * scaleStrength} style={{ height: "40vw" }}>
        <Background>
          <BackgroundImage
            fluid={alumniTOKI.childImageSharp.fluid}
            style={{ height: "55vw" }}
            rootMargin="500px"
            className="w-100vw"
          />
        </Background>
      </Parallax>

      {/* TLX */}
      <BackgroundImage
        fluid={tlxBackground.childImageSharp.fluid}
        style={{ backgroundPosition: "bottom left" }}
      >
        <Container fluid className="TLX">
          <div className="p-4 row no-gutters">
            <h5 className="col-12 mb-2">TLX - TOKI LEARNING</h5>
            <div className="col-12 col-md-3 mb-2">
              Sebuah platform yang dapat kalian semua manfaatkan untuk berlatih
              pemrograman kompetitif secara cuma-cuma!
            </div>
            <div className="col-12">
              <Link to="/">
                <button className="toki-button">VISIT WEB</button>
              </Link>
            </div>
          </div>
        </Container>
      </BackgroundImage>
      {/* End of TLX */}

      {/* Image after Latest Achievement */}
      <Parallax strength={250 * scaleStrength} style={{ height: "40vw" }}>
        <Background>
          <BackgroundImage
            fluid={pembinaTOKI.childImageSharp.fluid}
            style={{ height: "60vw" }}
            className="w-100vw"
            rootMargin={rootMargin}
          />
        </Background>
      </Parallax>

      {/* Fundamentals of Competitive Programming */}
      <BackgroundImage
        fluid={fundamentalsBackground.childImageSharp.fluid}
        style={{ backgroundPosition: "top left" }}
      >
        <Container fluid className="PKD">
          <div className="p-4 row no-gutters">
            <h5 className="col-12 mb-2">
              FUNDAMENTALS OF COMPETITIVE PROGAMMING
            </h5>
            <div className="col-12 col-md-3 mb-2">
              Dapatkan buku elektronik Pemrograman Kompetitif Dasar secara
              GRATIS!
            </div>
            <div className="col-12">
              <Link to="/">
                <button className="toki-button">DOWNLOAD NOW</button>
              </Link>
            </div>
          </div>
        </Container>
      </BackgroundImage>
      {/* End of Fundamentals of Competitive Programming */}

      {/* Image after Fundamentals of Competitive Programming */}
      <Parallax strength={400 * scaleStrength} style={{ height: "40vw" }}>
        <Background>
          <BackgroundImage
            fluid={TOKICamp.childImageSharp.fluid}
            style={{ height: "60vw" }}
            className="w-100vw"
            rootMargin={rootMargin}
          />
        </Background>
      </Parallax>

      {/* IA TOKI */}
      <BackgroundImage
        fluid={IABackground.childImageSharp.fluid}
        style={{ backgroundPosition: "top left" }}
      >
        <Container fluid className="IA">
          <div className="p-4 row no-gutters">
            <h5 className="col-12 mb-2">
              IKATAN ALUMNI-TIM OLIMPIADE KOMPUTER INDONESIA
            </h5>
            <div className="col-12 col-md-3 mb-2">
              Ikatan Alumni Tim Olimpiade Komputer Indonesia adalah perkumpulan
              dari alumni pembinaan Tim Olimpiade Komputer Indonesia...
            </div>
            <div className="col-12">
              <Link to="/">
                <button className="toki-button">READ MORE</button>
              </Link>
            </div>
          </div>
        </Container>
      </BackgroundImage>
      {/* End of IA TOKI */}

      {/* Image after IA TOKI */}
      <Parallax strength={300 * scaleStrength} style={{ height: "40vw" }}>
        <Background>
          <BackgroundImage
            fluid={pelatnas3.childImageSharp.fluid}
            style={{ height: "60vw" }}
            className="w-100vw"
            rootMargin={rootMargin}
          />
        </Background>
      </Parallax>

      <BackgroundImage
        fluid={blogBackground.childImageSharp.fluid}
        style={{ backgroundPosition: "bottom right" }}
      >
        <Container fluid className="blog">
          <Row>
            <div className="col-12 text-center">
              <h2>THE STORIES</h2>
            </div>
          </Row>
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
                      <h3 className="text-grey2">
                        {blogPost.frontmatter.title}
                      </h3>
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
          <Row>
            <div className="col-12 text-center">
              <button className="toki-button button-lg">MORE STORIES</button>
            </div>
          </Row>
        </Container>
      </BackgroundImage>
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
    landingImage: file(relativePath: { eq: "IOI2017.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutBackground: file(relativePath: { eq: "BackgroundAbout.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutTOKI: file(relativePath: { eq: "AboutTOKI.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    achievementBackground: file(
      relativePath: { eq: "BackgroundLatestAchievement.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    achievementLatest: file(relativePath: { eq: "IOI2019.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pembinaTOKI: file(relativePath: { eq: "PembinaTOKI.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    alumniTOKI: file(relativePath: { eq: "AlumniTOKI.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    syllabusBackground: file(relativePath: { eq: "BackgroundSyllabus.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tlxBackground: file(relativePath: { eq: "BackgroundTLX.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fundamentalsBackground: file(relativePath: { eq: "BackgroundPKD.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    IABackground: file(relativePath: { eq: "BackgroundIA.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TOKICamp: file(relativePath: { eq: "TOKICamp2020.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pelatnas3: file(relativePath: { eq: "Pelatnas3-2017.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    blogBackground: file(relativePath: { eq: "BackgroundBlogpost.png" }) {
      childImageSharp {
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
