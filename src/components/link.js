import { Link as GatsbyLink } from "gatsby";
import React from "react";

const Link = ({ disabled, className, ...otherProps }) => {
  return (
    <GatsbyLink
      {...(disabled
        ? {
            tabindex: -1,
            ariaDisabled: true,
            className: `${className} disabled`
          }
        : { className })}
      {...otherProps}
    ></GatsbyLink>
  );
};

export default Link;
