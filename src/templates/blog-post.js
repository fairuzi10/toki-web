import { graphql, Link } from "gatsby";
import { kebabCase } from "lodash";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import PreviewContent, { HTMLContent } from "../components/content";
import Footer from "../components/footer";
import Layout from "../components/layout";
import LightNavbar from "../components/light-navbar";
import "./blog-post.scss";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  author,
  canoncialUrl,
  helmet
}) => {
  const PostContent = contentComponent || PreviewContent;
  const container = contentComponent ? "container" : "continer-fluid";
  return (
    <section className="offset-navbar">
      {helmet || ""}
      <div className={container + " py-5"}>
        <div className="row">
          <div className="col">
            <h1>{title}</h1>
            {author && (
              <div className="mb-3">
                <b>Oleh {author}</b>
              </div>
            )}
            {canoncialUrl && (
              <div className="canoncial-block">
                Tulisan ini adalah salinan dari pos asli yang dapat diakses di{" "}
                <a href={canoncialUrl}>{canoncialUrl}</a>
              </div>
            )}
            <div className="text-justify">
              <PostContent content={content} />
            </div>
            {tags && tags.length ? (
              <div className="mt-3">
                <hr />
                <h4>Tags</h4>
                {tags.map(tag => (
                  <Link to={`/tag/${kebabCase(tag)}/`} key={tag}>
                    <button className="toki-button mr-3">{tag}</button>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <LightNavbar />
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        author={post.frontmatter.author}
        canoncialUrl={post.frontmatter.canoncial_url}
      />
      <Footer />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        canoncial_url
        tags
      }
    }
  }
`;
