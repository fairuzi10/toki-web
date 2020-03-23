import Img from "gatsby-image";
import Link from "gatsby-plugin-transition-link/AniLink";
import PropTypes from "prop-types";
import React from "react";
import "./blog-card.scss";
import { color } from "../config";

export const BlogCardContainer = ({ children }) => {
  return <div className="blog-card__container">{children}</div>;
};

const BlogCard = ({ featuredImage, title, excerpt, slug }) => {
  return (
    <div className="blog-card">
      <div className="blog-card__wrapper">
        <div>
          <Img fluid={featuredImage} className="mb-3" />
        </div>
        <div className="blog-card__content">
          <h3 className="text-grey2">{title}</h3>
          <div className="text-grey1 mb-2 blog-card__text">{excerpt}</div>
          <Link paintDrip hex={color.grey4} to={slug}>
            <button className="toki-button">READ MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
BlogCard.propTypes = {
  featuredImage: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

export default BlogCard;
