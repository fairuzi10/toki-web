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
import { Parallax, Background } from "react-parallax";
import BackgroundImage from "gatsby-background-image";

const IndexPage = props => {
  const { data } = props;
  const { width } = useWindowDimensions();
  const landingImage =
    width > breakpoints.md
      ? require("../img/IOI2017.png")
      : require("../img/IOI2017mob.png");
  const BackgroundAbout = data.aboutBackground.childImageSharp.fluid;
  const BackgroundAchievement =
    data.achievementBackground.childImageSharp.fluid;
  const BackgroundSyllabus = data.syllabusBackground.childImageSharp.fluid;
  const BackgroundTLX = data.tlxBackground.childImageSharp.fluid;
  const BackgroundFundamentals =
    data.fundamentalsBackground.childImageSharp.fluid;
  const BackgroundIA = data.IABackground.childImageSharp.fluid;
  const BackgroundBlog = data.BlogBackground.childImageSharp.fluid;
  const blogPosts = data.allMarkdownRemark.edges;
  const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };
  const imageStyle = {
    minHeight: "100vh",
    minWidth: "auto"
  };

  return (
    <Layout>
      <DarkNavbar />
      {/* Hero Page */}
      <Parallax bgImage={landingImage} strength={250} className="landing-image">
        <div style={{ height: 500 }}>
          <h1 style={insideStyles}>
            TIM OLIMPIADE
            <br /> KOMPUTER INDONESIA
          </h1>
        </div>
      </Parallax>
      {/* End of Hero Page */}

      {/* About Us */}
      <BackgroundImage fluid={BackgroundAbout}>
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
      <Parallax
        bgImage={require("../img/about_toki.png")}
        strength={250}
        className="image-between-pages"
        bgImageStyle={imageStyle}
      />

      {/* Latest Achievement */}
      <BackgroundImage fluid={BackgroundAchievement}>
        <Container fluid className="latest-achievement">
          <div className="p-4 row no-gutters">
            <h5 className="col-12 mb-2">LATEST ACHIEVEMENT</h5>
            <div className="col-12 col-md-6 mb-2">
              Gold Medal, Abdul Malik Nurrokhman, SMA Semesta Semarang
              <br />
              Silver Medal, R. Fausta Anugrah Dianparama, SMAN 1 Yogyakarta
              <br />
              Silver Medal, Vincent Ling, SMA Pribadi Bandung
              <br />
              Bronze Medal, Moses Mayer, SMA Jakarta Intercultural School
              <br />
            </div>
            <div className="col-12">
              <Link to="/">
                <button className="toki-button">READ MORE</button>
              </Link>
            </div>
          </div>
        </Container>
      </BackgroundImage>
      {/* End of Latest Achievement */}

      {/* Image after Latest Achievement */}
      <Parallax
        bgImage={require("../img/Pembina-IA-TOKI.png")}
        strength={250}
        className="image-between-pages"
        bgImageStyle={imageStyle}
      />

      {/* OSK-OSP Syllabus */}
      <BackgroundImage fluid={BackgroundSyllabus}>
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
      <Parallax
        bgImage={require("../img/Alumni-TOKI.png")}
        strength={250}
        className="image-between-pages"
        bgImageStyle={imageStyle}
      />

      {/* TLX */}
      <BackgroundImage fluid={BackgroundTLX}>
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

      {/* Image after TLX */}
      <Parallax
        bgImage={require("../img/IOI 2019.png")}
        strength={333}
        className="image-between-pages"
        bgImageStyle={imageStyle}
      />

      {/* Fundamentals of Competitive Programming */}
      <BackgroundImage fluid={BackgroundFundamentals}>
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
      <Parallax
        bgImage={require("../img/TOKI Camp 2020.png")}
        strength={600}
        className="image-between-pages"
        bgImageStyle={imageStyle}
      />

      {/* IA TOKI */}
      <BackgroundImage fluid={BackgroundIA}>
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
      <Parallax
        bgImage={require("../img/PELATNAS32017.png")}
        strength={500}
        className="image-between-pages"
        bgImageStyle={imageStyle}
      />

      <BackgroundImage fluid={BackgroundBlog}>
        <Container fluid className="blog">
          <Row>
            <div className="col-12 text-center">
              <h3>THE STORIES</h3> <br />
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
              <button className="toki-button">MORE STORIES</button>
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
    mobileLandingImage: file(relativePath: { eq: "IOI2017.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopLandingImage: file(relativePath: { eq: "IOI2017.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutBackground: file(relativePath: { eq: "BackgroundAbout.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    achievementBackground: file(
      relativePath: { eq: "BackgroundLatestAchievement.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    syllabusBackground: file(relativePath: { eq: "BackgroundSyllabus.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tlxBackground: file(relativePath: { eq: "BackgroundTLX.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fundamentalsBackground: file(relativePath: { eq: "BackgroundPKD.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    IABackground: file(relativePath: { eq: "BackgroundIA.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    BlogBackground: file(relativePath: { eq: "BackgroundBlogpost.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
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
