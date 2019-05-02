import React from "react";
import Card from "../Card/Card";

export default function Cards(props) {
  console.log(props);
  const formatCategory = (categoryString) => {
    return categoryString.toUpperCase()
  }
  return (<React.Fragment>
    <h1 className="category-text"><div>{formatCategory(props.category)}</div></h1>
    <section className="cards">
      
      {props.display.map(item => {
        return (
          <Card
            {...item}
            key={item.Name}
            updateFavorites={props.updateFavorites}
          />
        );
      })}
    </section>
    </React.Fragment>
  );
}
