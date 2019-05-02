import React from "react";

export default function Movie(props) {
  return (
    <article className="movie">
      <h1>{props.title}</h1>
      <p className="movie-crawl">{props.crawl}</p>
      <span className="movie-date">{props.date}</span>
    </article>
  );
}

