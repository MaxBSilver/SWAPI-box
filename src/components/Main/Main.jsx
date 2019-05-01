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

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      page: 1,
      people: [],
      vehicles: [],
      planets: [],
      display: ""
    };
  }

  updateCategory = updatedCategory => {
    this.setState({ category: updatedCategory }, () => {
      if (this.state.category === "people") {
        this.getPeople();
      }
      if (this.state.category === "vehicles") {
        this.getVehicles();
      }
      if (this.state.category === "planets") {
        this.getPlanets();
      }
    });
  };

  getPeople = () => {
    const { category, page } = this.state;
    fetchAny(category, page)
      .then(peoplePlanet => fetchPlanetInPeople(peoplePlanet))
      .then(peopleSpecies => fetchSpeciesInPeople(peopleSpecies))
      .then(cleanedPeople => cleanPeopleData(cleanedPeople))
      .then(people => this.setState({ people, display: category }));
  };

  getPlanets = () => {
    const { category, page } = this.state;
    fetchAny(category, page)
      .then(planetResidents => fetchPlanetResidents(planetResidents))
      .then(planetData => cleanPlanetData(planetData))
      .then(planets => this.setState({ planets, display: category }));
  };

  getVehicles = () => {
    const { category, page } = this.state;
    fetchAny(category, page)
      .then(vehicleData => cleanVehicleData(vehicleData))
      .then(vehicles => this.setState({ vehicles, display: category }));
  };

  render() {
    const { category } = this.state;
    return (
      <main>
        <Nav updateCategory={this.updateCategory} />
        {/* {!this.state.display && <Cards display={this.state[category]} />} */}

        {this.state.display && <Cards display={this.state[category]} />}
      </main>
    );
  }
}

export default Main;
