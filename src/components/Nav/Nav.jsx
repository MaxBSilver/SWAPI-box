import React from "react";

export default function Nav(props) {
  const handleClickCategory = (e) => {
   const { name } = e.target;
   props.updateCategory(name)
  };
  
  return (
    <nav>
      <div className="nav-btn-container">
        <button
          className="nav-btn nav-people-btn"
          onClick={handleClickCategory}
          name="people"
        >
          PEOPLE
        </button>
        <button
          className="nav-btn nav-planets-btn"
          onClick={handleClickCategory}
          name="planets"
        >
          PLANETS
        </button>
        <button
          className="nav-btn nav-vehicles-btn"
          onClick={handleClickCategory}
          name="vehicles"
        >
          VEHICLES
        </button>
        <button
          className="nav-btn nav-favorites-btn"
          onClick={handleClickCategory}
          name="favorites"
        >
          FAVORITES
        </button>
      </div>
    </nav>
  );
}
