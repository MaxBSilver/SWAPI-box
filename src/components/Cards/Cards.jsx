import React from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const Cards = props => {
  return (
    <React.Fragment>
      <h1 className="category-text">
        <div>{props.category.toUpperCase()}</div>
      </h1>
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
};

export default Cards;

Cards.propTypes = {
  category: PropTypes.string,
  display: PropTypes.arrayOf(PropTypes.object),
  updateFavorites: PropTypes.func
};
