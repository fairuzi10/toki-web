import { kebabCase } from "lodash";

const url = {
  HOME: "/",
  ABOUT_TOKI: "/about-toki/",
  ABOUT_IA_TOKI: "/about-ia-toki/",
  HALL_OF_FAME: "/hall-of-fame/",
  TAG: "/tags/",
  PKD_BOOK: "/downloads/buku-pemrograman-kompetitif-dasar/",
  OSN_SYLLABUS: "/silabus-materi-osn/",
  TLX: "https://tlx.toki.id/",
  DOWNLOADS: "/downloads/",
  CALENDAR: "/calendar/",
  BEBRAS: "https://bebras.or.id/v3/",
  CONTACTS: "/",
  FACEBOOK: "https://www.facebook.com/olimpinformatika/",
  INSTAGRAM: "https://www.instagram.com/olimpinformatika/",
  YOUTUBE: "https://www.youtube.com/channel/UCe1X38BE3kIjsoxqv2r8oog",
  // if changed, need to also update it manually in gatsby-node.js due to ES6 import issue
  toBlog: idx => (idx === 1 ? `/blog/` : `/blog/${idx}/`),
  toTag: tag => idx =>
    idx === 1 ? `/tag/${kebabCase(tag)}/` : `/tag/${kebabCase(tag)}/${idx}/`
};

export default url;
