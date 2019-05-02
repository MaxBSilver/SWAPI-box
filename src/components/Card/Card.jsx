import React from "react";

export default function Card(props) {
  const handleFavorite = e => {
    const { id } = e.target;
    props.updateFavorites(id);
  };
  const values = Object.entries(props);
  return (
    <article className="card">
      <h1>{values[0][1]}</h1>
      {values.map(value => {
        return (
          value[0] !== "favorited" &&
          value[0] !== "updateFavorites" && (
            <span key={value}>{value.join(" : ")}</span>
          )
        );
      })}
      <button id={values[0][1]} onClick={handleFavorite}>
        favorite
      </button>
    </article>
  );
}
