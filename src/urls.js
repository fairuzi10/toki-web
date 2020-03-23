import { kebabCase } from "lodash";

const url = {
  HOME: "/",
  ABOUT_TOKI: "/about/",
  HALL_OF_FAME: "/hall-of-fame/",
  BLOG: "/blog/",
  toTag: tag => `/tag/${kebabCase(tag)}/`
};

export default url;
