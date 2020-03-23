const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const { kebabCase } = require("lodash");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      posts: allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.posts.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      });
    });

    // Create blog-list pages
    const postsPerPage = 6;
    const numPages = Math.ceil(posts.length / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/blog-list.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        }
      });
    });

    const tags = result.data.tagsGroup.group;
    const createPaginatedTagPages = tag => {
      const postsPerPage = 6;
      const numPages = Math.ceil(tag.totalCount / postsPerPage);
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path:
            i === 0
              ? `/tag/${kebabCase(tag.fieldValue)}/`
              : `/tag/${kebabCase(tag.fieldValue)}/${i + 1}/`,
          component: path.resolve("src/templates/tag-list.js"),
          context: {
            tag: tag.fieldValue,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1
          }
        });
      });
    };
    tags.forEach(createPaginatedTagPages);
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
