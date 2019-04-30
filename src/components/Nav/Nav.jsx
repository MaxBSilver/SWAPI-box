import React from "react";

export default function Nav(props) {
  const handleClick = (e) => {
   const { name } = e.target;
   props.updateCategory(name)
  };
  return (
    <nav>
      <div className="nav-btn-container">
        <button
          className="nav-btn nav-people-btn"
          onClick={handleClick}
          name="people"
        >
          PEOPLE
        </button>
        <button
          className="nav-btn nav-planets-btn"
          onClick={handleClick}
          name="planets"
        >
          PLANETS
        </button>
        <button
          className="nav-btn nav-vehicles-btn"
          onClick={handleClick}
          name="vehicles"
        >
          VEHICLES
        </button>
        <button
          className="nav-btn nav-favorites-btn"
          onClick={handleClick}
          name="favorites"
        >
          FAVORITES
        </button>
      </div>
    </nav>
  );
}
