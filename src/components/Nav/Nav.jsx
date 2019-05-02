import React from "react";
import {
  faSpaceShuttle,
  faUsers,
  faHeart,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Nav(props) {
  const handleClickCategory = e => {
    const { name } = e.target;
    props.updateCategory(name);
  };

  return (
    <nav>
      <div className="nav-btn-container">
        <button
          className="nav-btn nav-people-btn"
          onClick={handleClickCategory}
          name="people"
        >
          <FontAwesomeIcon  className="nav-btn-icon" icon={faUsers} />
          PEOPLE
        </button>
        <button
          className="nav-btn nav-planets-btn"
          onClick={handleClickCategory}
          name="planets"
        >
          <FontAwesomeIcon className="nav-btn-icon"  icon={faGlobe} />
          PLANETS
        </button>
        <button
          className="nav-btn nav-vehicles-btn"
          onClick={handleClickCategory}
          name="vehicles"
        >
          <FontAwesomeIcon className="nav-btn-icon"  icon={faSpaceShuttle} />
          VEHICLES
        </button>
        <button
          className="nav-btn nav-favorites-btn"
          onClick={handleClickCategory}
          name="favorites"
        >
          <FontAwesomeIcon  className="nav-btn-icon"  icon={faHeart} />
          FAVORITES
        </button>
      </div>
    </nav>
  );
}
