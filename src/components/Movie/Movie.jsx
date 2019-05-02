import React from "react";

export default function Movie(props) {
  return (
    <article className="movie">
      <h1>{props.title}</h1>
      <p>{props.crawl}</p>
      <span>{props.date}</span>
    </article>
  );
}

