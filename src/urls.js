import { kebabCase } from "lodash";

const url = {
  HOME: "/",
  ABOUT_TOKI: "/about/",
  HALL_OF_FAME: "/hall-of-fame/",
  TAG: "/tags/",
  // if changed, need to also update it manually in gatsby-node.js due to ES6 import issue
  toBlog: idx => (idx === 1 ? `/blog/` : `/blog/${idx}/`),
  toTag: tag => idx =>
    idx === 1 ? `/tag/${kebabCase(tag)}/` : `/tag/${kebabCase(tag)}/${idx}/`,
  PKD_BOOK: "/downloads/buku-pemrograman-kompetitif-dasar/",
  OSN_SYLLABUS: "/silabus-materi-osn/",
  TLX: "https://tlx.toki.id/",
  DOWNLOADS: "/downloads/"
};

export default url;
