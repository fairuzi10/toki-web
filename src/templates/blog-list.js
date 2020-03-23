import { graphql, Link } from "gatsby";
import React from "react";
import BlogCard, { BlogCardContainer } from "../components/blog-card";
import Footer from "../components/footer";
import Layout from "../components/layout";
import LightNavbar from "../components/light-navbar";
import Pagination from "../components/pagination";
import url from "../urls";

const BlogIndexPage = ({ data, pageContext }) => {
  const blogPosts = data.blogPosts.edges;
  const tags = data.tags.group;
  const { currentPage, numPages } = pageContext;
  return (
    <Layout>
      <LightNavbar />
      <div className="container offset-navbar mb-4">
        <h1 className="text-center pt-4">The Stories</h1>
        <div className="text-center">
          {tags.map(tag => (
            <Link to={url.toTag(tag.name)(1)} key={tag.name}>
              <button className="toki-button mr-3">
                {`${tag.name} (${tag.totalCount})`}
              </button>
            </Link>
          ))}
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
                key={blogPost.fields.slug}
              />
            );
          })}
        </BlogCardContainer>
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          toUrl={url.toBlog}
        />
      </div>
      <Footer />
    </Layout>
  );
};

export default BlogIndexPage;

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    blogPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
    tags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        name: fieldValue
        totalCount
      }
    }
  }
`;
