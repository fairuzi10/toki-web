import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";

const Link = ({ disabled, className, ...otherProps }) => {
  return (
    <AniLink
      {...(disabled
        ? {
            tabindex: -1,
            ariaDisabled: true,
            className: `${className} disabled`
          }
        : { className })}
      {...otherProps}
    ></AniLink>
  );
};

export default Link;
