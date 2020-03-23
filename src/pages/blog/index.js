import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import LightNavbar from "../../components/light-navbar";

const BlogIndexPage = ({ data }) => {
  const blogPosts = data.blogPosts.edges;
  return (
    <Layout>
      <LightNavbar />
      <div className="container offset-navbar mb-4">
        <h1 className="text-center pt-4">The Stories</h1>
        <div className="row">
          {blogPosts.map(edge => {
            const blogPost = edge.node;
            return (
              <div
                className="col col-md-9 col-lg-6 d-flex"
                key={blogPost.fields.slug}
              >
                <div className="mx-1 mb-3 blog-post">
                  <div>
                    <Img
                      fluid={
                        blogPost.frontmatter.featured_image.childImageSharp
                          .fluid
                      }
                      className="mb-3"
                    />
                  </div>
                  <div className="blog-card__content">
                    <h3 className="text-grey2">{blogPost.frontmatter.title}</h3>
                    <div className="text-grey1 mb-2 blog-card__text">
                      {blogPost.excerpt}
                    </div>
                    <Link to={blogPost.fields.slug}>
                      <button className="toki-button">READ MORE</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default BlogIndexPage;

export const pageQuery = graphql`
  query {
    blogPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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
