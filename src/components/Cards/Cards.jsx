import React from "react";
import Card from "../Card/Card";

export default function Cards(props) {
  console.log(props);
  return (
    <section className="cards">
      {props.display.map(item => {
        return <Card {...item} key={item.name} updateFavorites={props.updateFavorites}/>;
      })}
    </section>
  );
}
