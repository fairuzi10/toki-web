import { kebabCase } from "lodash";

const url = {
  HOME: "/",
  ABOUT_TOKI: "/about/",
  HALL_OF_FAME: "/hall-of-fame/",
  BLOG: "/blog/",
  TAG: "/tag/",
  // if changed, need to also update it manually in gatsby-node.js due to ES6 import issue
  toTag: tag => `/tag/${kebabCase(tag)}/`
};

export default url;
