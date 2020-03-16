import CMS from "netlify-cms-app";
import BlogPostPreview from "./preview-templates/blog-post-preview";

CMS.registerPreviewStyle("./cms.scss");
CMS.registerPreviewTemplate("blog", BlogPostPreview);
