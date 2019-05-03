import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Card = props => {
  const values = Object.entries(props);
  return (
    <article className="card" key={values[0][1]}>
      <h1>
        {values[0][1]}{" "}
        <button
          className="card-favorite-button"
          id={values[0][1]}
          onClick={(e) => props.updateFavorites(e.target.id)}
        >
          <FontAwesomeIcon
            className="card-favorite-icon"
            icon={faHeart}
            style={{ color: props.favorited ? "#B15766" : "grey" }}
          />
        </button>
      </h1>
      {values.map(value => {
        return (
          value[0] !== "favorited" &&
          value[0] !== "updateFavorites" &&
          value[0] !== "Name" && <span key={value}>{value.join(" : ")}</span>
        );
      })}
    </article>
  );
};
export default Card;
