import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import LightNavbar from "../../components/light-navbar";
import BlogCard, { BlogCardContainer } from "../../components/blog-card";

const BlogIndexPage = ({ data }) => {
  const blogPosts = data.blogPosts.edges;
  return (
    <Layout>
      <LightNavbar />
      <div className="container offset-navbar mb-4">
        <h1 className="text-center pt-4">The Stories</h1>
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
