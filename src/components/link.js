import { Link as GatsbyLink } from "gatsby";
import React from "react";

const Link = ({ disabled, className, ...otherProps }) => {
  return (
    <GatsbyLink
      {...(disabled
        ? {
            tabIndex: -1,
            "aria-disabled": true,
            className: `${className} disabled`
          }
        : { className })}
      {...otherProps}
    ></GatsbyLink>
  );
};

export default Link;
