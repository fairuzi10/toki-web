import React from "react";
import PropTypes from "prop-types";
import "./content.scss";

export const HTMLContent = ({ content, className }) => (
  <div
    className={`html-content ${className || ""}`}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

const PreviewContent = ({ content, className }) => (
  <div className={`preview-content ${className || ""}`}>{content}</div>
);

PreviewContent.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

HTMLContent.propTypes = PreviewContent.propTypes;

export default PreviewContent;
