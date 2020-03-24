import Link from "./link";
import PropTypes from "prop-types";
import React from "react";
import "./pagination.scss";

const Pagination = ({ currentPage, numPages, toUrl }) => {
  return (
    <ul className="pagination toki-pagination justify-content-center my-4">
      <li className={`page-item  ${currentPage === 1 ? "disabled" : ""}`}>
        <Link
          className="page-link"
          to={toUrl(currentPage - 1)}
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Previous</span>
        </Link>
      </li>
      {Array.from({ length: numPages }).map((_, i) => (
        <li
          className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
          key={i}
        >
          <Link className="page-link" to={toUrl(i + 1)}>
            {i + 1}
          </Link>
        </li>
      ))}
      {
        <li
          className={`page-item ${currentPage === numPages ? "disabled" : ""}`}
        >
          <Link
            className="page-link"
            to={toUrl(currentPage + 1)}
            aria-label="Previous"
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </Link>
        </li>
      }
    </ul>
  );
};
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  toUrl: PropTypes.func.isRequired
};

export default Pagination;
