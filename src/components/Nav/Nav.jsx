import React from "react";
import PropTypes from "prop-types";
import {
  faSpaceShuttle,
  faUsers,
  faHeart,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Nav = props => {
  return (
    <nav>
      <div className="nav-btn-container">
        <button
          className="nav-btn nav-people-btn"
          onClick={event => props.updateCategory(event.target.name)}
          name="people"
        >
          <FontAwesomeIcon className="nav-btn-icon" icon={faUsers} />
          PEOPLE
        </button>
        <button
          className="nav-btn nav-planets-btn"
          onClick={event => props.updateCategory(event.target.name)}
          name="planets"
        >
          <FontAwesomeIcon className="nav-btn-icon" icon={faGlobe} />
          PLANETS
        </button>
        <button
          className="nav-btn nav-vehicles-btn"
          onClick={event => props.updateCategory(event.target.name)}
          name="vehicles"
        >
          <FontAwesomeIcon className="nav-btn-icon" icon={faSpaceShuttle} />
          VEHICLES
        </button>
        <button
          className="nav-btn nav-favorites-btn"
          onClick={event => props.updateCategory(event.target.name)}
          name="favorites"
        >
          <FontAwesomeIcon className="nav-btn-icon" icon={faHeart} />
          FAVORITES ({props.favorites})
        </button>
      </div>
    </nav>
  );
};
export default Nav;

Nav.propTypes = {
  favorites: PropTypes.number,
  updateCategory: PropTypes.func.isRequired
};
