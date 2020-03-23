import { graphql } from "gatsby";
import React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import LightNavbar from "../components/light-navbar";
import Link from "../components/link";
import url from "../urls";

const TagIndexPage = ({ data, location }) => {
  const tags = data.tags.group;
  return (
    <Layout>
      <LightNavbar location={location} />
      <div className="container offset-navbar mb-4 text-center content">
        <h1 className="pt-3">Tag List</h1>
        {tags.map(tag => (
          <Link to={url.toTag(tag.name)(1)} key={tag.name}>
            <button className="toki-button mr-3">
              {`${tag.name} (${tag.totalCount})`}
            </button>
          </Link>
        ))}
      </div>
      <Footer />
    </Layout>
  );
};

export default TagIndexPage;

export const pageQuery = graphql`
  query {
    tags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        name: fieldValue
        totalCount
      }
    }
  }
`;
