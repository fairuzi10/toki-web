import { withPrefix } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import "../styles/global.scss";
import useSiteMetadata from "./site-metadata";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />
      </Helmet>
      <div>{children}</div>
    </div>
  );
};

export default TemplateWrapper;
