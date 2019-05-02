import React, { Component } from "react";
import {
  fetchAny,
  fetchPlanetInPeople,
  fetchSpeciesInPeople,
  fetchPlanetResidents
} from "../../fetch";
import {
  cleanPeopleData,
  cleanVehicleData,
  cleanPlanetData
} from "../../utility";

import Nav from "../Nav/Nav";
import Cards from "../Cards/Cards";
import Movie from "../Movie/Movie";
import Loading from "../Loading/Loading";
import { all } from "q";

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
      if (
        this.state.category === "people" &&
        this.state[this.state.category].length === 0
      ) {
        this.getPeople();
      }
      if (
        this.state.category === "vehicles" &&
        this.state[this.state.category].length === 0
      ) {
        this.getVehicles();
      }
      if (
        this.state.category === "planets" &&
        this.state[this.state.category].length === 0
      ) {
        this.getPlanets();
      }
    });
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
    let updatedArray = displayedArray.map(item => {
      if (item.name === favoritedCard) {
        let favoritedItem = { ...item, favorited: !item.favorited };
        return favoritedItem
      } else {
        return item;
      }
    });
    
    this.setState({ [category]: updatedArray }, () => {
      this.updateFavoritesArray();
    });
  };

  updateFavoritesArray = ()=> {
    const { people, planets, vehicles} = this.state;
    let allData = [];
    allData = allData.concat(people, planets, vehicles)
    let favorites = allData.filter(item => item.favorited)
    this.setState({ favorites })
  }

  render() {
    const { category } = this.state;
    const { title, crawl, date } = this.props;
    return (
      <main>
        <Nav updateCategory={this.updateCategory} />
        {!this.state.loading && !this.state.display && (
          <Movie title={title} crawl={crawl} date={date} />
        )}
        {this.state.loading && (
          <Loading className={this.state.loading ? "fadeIn" : "fadeOut"} />
        )}
        {this.state.display && (
          <Cards
            display={this.state[category]}
            updateFavorites={this.updateFavorites}
          />
        )}
      </main>
    );
  }
}

export default Main;
