import React from "react";
import PropTypes from "prop-types";
const Movie = props => {
  const { title, crawl, date } = props;
  return (
    <article className="movie">
      <h1>{title}</h1>
      <p className="movie-crawl">{crawl}</p>
      <span className="movie-date">{date}</span>
    </article>
  );
};

export default Movie;

Movie.propTypes = {
  title: PropTypes.string,
  crawl: PropTypes.string,
  date: PropTypes.string
};
