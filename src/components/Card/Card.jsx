import React from "react";

export default function Card(props) {
  const values = Object.entries(props);
  console.log(values);
  return (
    <article className="card">
      <h1>
        {values[0][0]} : {values[0][1]}
      </h1>
      {values.map(value => {
        console.log(value);
        return value[0] != "favorited" && <span>{value.join(" : ")}</span>;
      })}
      <button> favorite </button>
    </article>
  );
}
