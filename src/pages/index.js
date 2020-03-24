import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { Background, Parallax } from "react-parallax";
import BlogCard, { BlogCardContainer } from "../components/blog-card";
import DarkNavbar from "../components/dark-navbar";
import Footer from "../components/footer";
import Layout from "../components/layout";
import { IOI, medalColor } from "../data/hall-of-fame";
import { useWindowSize } from "react-use";
import url from "../urls";
import "./index.scss";

const IndexPage = props => {
  const { data, location } = props;
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
  const { width } = useWindowSize();
  const scaleStrength = width / 1440;
  const blogPosts = data.blogPosts.edges;

  return (
    <Layout>
      <DarkNavbar location={location} />
      {/* Hero Page */}
      {/* No strength scaling is intended */}
      <Parallax strength={100}>
        <div className="landing-image">
          <h1>TIM OLIMPIADE KOMPUTER INDONESIA</h1>
        </div>
        <Background>
          <Img
            fluid={landingImage.childImageSharp.fluid}
            style={{ height: "80vw" }}
            className="w-100vw"
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
            <h5 className="col-12 mb-2 section-title">ABOUT US</h5>
            <div className="col-12 col-md-6 mb-2">
              Tim Olimpiade Komputer Indonesia, atau yang sering disingkat
              “TOKI”, adalah sebuah tim yang terdiri dari siswa-siswa terbaik
              sekolah menengah di Indonesia yang dipersiapkan khusus untuk
              mewakili Indonesia bertanding dalam ajang olimpiade informatika
              tingkat internasional.
            </div>
            <div className="col-12">
              <Link to={url.ABOUT_TOKI}>
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
          <Img
            fluid={aboutTOKI.childImageSharp.fluid}
            style={{ height: "40vw" }}
            className="w-100vw"
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
            <h5 className="col-12 mb-2 section-title">LATEST ACHIEVEMENT</h5>
            <div className="col-12 col-md-6 mb-2">
              {IOI[0].participants.map(participant => {
                const medal = (
                  <span style={{ color: medalColor[participant.medal] }}>
                    <FontAwesomeIcon icon={faMedal} />
                  </span>
                );
                return (
                  <div className="text-grey2" key={participant.name}>
                    {medal} {participant.name}, {participant.school}
                  </div>
                );
              })}
            </div>
            <div className="col-12">
              <Link to={url.HALL_OF_FAME}>
                <button className="toki-button">READ MORE</button>
              </Link>
            </div>
          </div>
        </Container>
      </BackgroundImage>
      {/* End of Latest Achievement */}

      <Parallax strength={300 * scaleStrength} style={{ height: "40vw" }}>
        <Background>
          <Img
            fluid={achievementLatest.childImageSharp.fluid}
            style={{ height: "80vw" }}
            className="w-100vw"
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
            <h5 className="col-12 mb-2 section-title">OSK-OSP SYLLABUS</h5>
            <div className="col-12 col-md-3 mb-2">
              Hai para calon peserta OSK dan OSP! Persiapkan dirimu dengan
              mempelajari materi-materi yang dapat kamu akses pada laman ini
            </div>
            <div className="col-12">
              <Link to={url.OSN_SYLLABUS}>
                <button className="toki-button">VISIT PAGE</button>
              </Link>
            </div>
          </div>
        </Container>
      </BackgroundImage>
      {/* End of OSK-OSP Syllabus */}

      {/* Image after OSK-OSP Syllabus */}
      <Parallax strength={150 * scaleStrength} style={{ height: "40vw" }}>
        <Background>
          <Img
            fluid={alumniTOKI.childImageSharp.fluid}
            style={{ height: "55vw" }}
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
            <h5 className="col-12 mb-2 section-title">TLX - TOKI LEARNING</h5>
            <div className="col-12 col-md-3 mb-2">
              Sebuah platform yang dapat kalian semua manfaatkan untuk berlatih
              pemrograman kompetitif secara cuma-cuma!
            </div>
            <div className="col-12">
              <a href={url.TLX} target="_blank" rel="noopener noreferrer">
                <button className="toki-button">VISIT WEB</button>
              </a>
            </div>
          </div>
        </Container>
      </BackgroundImage>
      {/* End of TLX */}

      {/* Image after Latest Achievement */}
      <Parallax strength={250 * scaleStrength} style={{ height: "40vw" }}>
        <Background>
          <Img
            fluid={pembinaTOKI.childImageSharp.fluid}
            style={{ height: "60vw" }}
            className="w-100vw"
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
            <h5 className="col-12 mb-2 section-title">
              FUNDAMENTALS OF COMPETITIVE PROGAMMING
            </h5>
            <div className="col-12 col-md-3 mb-2">
              Dapatkan buku elektronik Pemrograman Kompetitif Dasar secara
              GRATIS!
            </div>
            <div className="col-12">
              <Link to={url.PKD_BOOK}>
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
          <Img
            fluid={TOKICamp.childImageSharp.fluid}
            style={{ height: "60vw" }}
            className="w-100vw"
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
            <h5 className="col-12 mb-2 section-title">
              IKATAN ALUMNI-TIM OLIMPIADE KOMPUTER INDONESIA
            </h5>
            <div className="col-12 col-md-3 mb-2">
              Ikatan Alumni Tim Olimpiade Komputer Indonesia adalah perkumpulan
              dari alumni...
            </div>
            <div className="col-12">
              <Link to={url.ABOUT_IA_TOKI}>
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
          <Img
            fluid={pelatnas3.childImageSharp.fluid}
            style={{ height: "60vw" }}
            className="w-100vw"
          />
        </Background>
      </Parallax>

      <BackgroundImage
        fluid={blogBackground.childImageSharp.fluid}
        style={{ backgroundPosition: "bottom right" }}
      >
        <Container fluid className="blog">
          <Row>
            <div className="col-12 text-center section-title">
              <h3>THE STORIES</h3> <br />
            </div>
          </Row>
          <BlogCardContainer>
            {blogPosts.map(edge => {
              const blogPost = edge.node;
              return (
                <BlogCard
                  featuredImage={
                    blogPost.frontmatter.featured_image.childImageSharp.fluid
                  }
                  title={blogPost.frontmatter.title}
                  excerpt={blogPost.excerpt}
                  slug={blogPost.fields.slug}
                  key={blogPost.fields.slug}
                />
              );
            })}
          </BlogCardContainer>
          <div className="text-center pb-4">
            <Link to={url.toBlog(1)}>
              <button className="toki-button button-lg">MORE STORIES</button>
            </Link>
          </div>
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
    blogPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featured_image {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 300, cropFocus: CENTER) {
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
