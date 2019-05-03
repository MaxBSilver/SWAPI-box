import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  fetchAny,
  fetchPlanetInPeople,
  fetchSpeciesInPeople,
  fetchPlanetResidents
} from "../../utility/fetch";
import {
  cleanPeopleData,
  cleanVehicleData,
  cleanPlanetData
} from "../../utility/utility";

import Nav from "../Nav/Nav";
import Cards from "../Cards/Cards";
import Movie from "../Movie/Movie";
import Loading from "../Loading/Loading";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      category: "",
      display: "",
      page: 1,
      people: [],
      vehicles: [],
      planets: [],
      favorites: []
    };
  }

  updateCategory = updatedCategory => {
    this.setState({ category: updatedCategory }, () => {
      const { category } = this.state;
      this.selectCategory(category);
    });
  };

  selectCategory = category => {
    if (category === "people" && this.state[category].length === 0) {
      this.getPeople();
    }
    if (category === "vehicles" && this.state[category].length === 0) {
      this.getVehicles();
    }
    if (category === "planets" && this.state[category].length === 0) {
      this.getPlanets();
    }
  };

  getPeople = () => {
    const { category, page } = this.state;
    this.setState({ loading: true });
    fetchAny(category, page)
      .then(peoplePlanet => fetchPlanetInPeople(peoplePlanet))
      .then(peopleSpecies => fetchSpeciesInPeople(peopleSpecies))
      .then(cleanedPeople => cleanPeopleData(cleanedPeople))
      .then(people =>
        this.setState({ people, display: category, loading: false })
      );
  };

  getPlanets = () => {
    const { category, page } = this.state;
    this.setState({ loading: true });
    fetchAny(category, page)
      .then(planetResidents => fetchPlanetResidents(planetResidents))
      .then(planetData => cleanPlanetData(planetData))
      .then(planets =>
        this.setState({ planets, display: category, loading: false })
      );
  };

  getVehicles = () => {
    const { category, page } = this.state;
    this.setState({ loading: true });
    fetchAny(category, page)
      .then(vehicleData => cleanVehicleData(vehicleData))
      .then(vehicles =>
        this.setState({ vehicles, display: category, loading: false })
      );
  };

  updateFavorites = favoritedCard => {
    const { category } = this.state;
    let displayedArray = this.state[category];
    let updatedArray = this.mapFavorites(displayedArray, favoritedCard);
    this.setState({ [category]: updatedArray }, () => {
      this.updateFavoritesInState();
    });
  };

  mapFavorites = (arrayToUpdate, itemToAdd) => {
    return arrayToUpdate.map(item => {
      return item.Name === itemToAdd
        ? { ...item, favorited: !item.favorited }
        : item;
    });
  };

  updateFavoritesInState = () => {
    const { people, planets, vehicles } = this.state;
    let allData = people.concat(planets, vehicles);
    let favorites = allData.filter(item => item.favorited);
    this.setState({ favorites });
  };

  render() {
    const { category } = this.state;
    const { title, crawl, date } = this.props;
    return (
      <main>
        <Nav
          updateCategory={this.updateCategory}
          favorites={this.state.favorites.length}
        />
        {!this.state.loading && !this.state.display && (
          <Movie title={title} crawl={crawl} date={date} />
        )}
        {this.state.loading && (
          <Loading className={this.state.loading ? "fadeIn" : "fadeOut"} />
        )}
        {this.state.display && (
          <Cards
            display={this.state[category]}
            category={category}
            updateFavorites={this.updateFavorites}
          />
        )}
      </main>
    );
  }
}

export default Main;

Main.propTypes = {
  crawl: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string
};
