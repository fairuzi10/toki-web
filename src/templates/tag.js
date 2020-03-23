import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import BlogCard, { BlogCardContainer } from "../components/blog-card";
import Footer from "../components/footer";
import Layout from "../components/layout";
import LightNavbar from "../components/light-navbar";
import url from "../urls";

const Tag = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const totalCount = data.blogPosts.totalCount;
  const blogPosts = data.blogPosts.edges;
  const tagHeader = `${totalCount} Post${
    totalCount === 1 ? "" : "s"
  } Tagged with "${tag}"`;
  return (
    <Layout>
      <LightNavbar />
      <div className="offset-navbar container content mb-4">
        <div className="text-center mb-3">
          <h1 className="pt-4">{tagHeader}</h1>
          <Link to={url.TAG}>
            <button className="toki-button">See all tags</button>
          </Link>
        </div>
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
              />
            );
          })}
        </BlogCardContainer>
      </div>
      <Footer />
    </Layout>
  );
};
Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              featured_image: PropTypes.object.isRequired,
              title: PropTypes.string.isRequired
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    })
  })
};
export default Tag;

export const pageQuery = graphql`
  query($tag: String) {
    blogPosts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
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
