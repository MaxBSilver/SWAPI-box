import React, { Component } from "react";
import { fetchAny, fetchPlanetInPeople, fetchSpeciesInPeople, fetchPlanetResidents } from "../../utility/fetch";
import { cleanPeople } from "../../utility/utility";


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
      planets: []
    };
  }

  updateCategory = updatedCategory => {
    this.setState({ category: updatedCategory }, () => {
      if (this.state.category === "people") {
        this.getPeople()
      }
      if (this.state.category === "vehicles") {
      }
      if (this.state.category === "planets") {
        this.getPlanets()

      }
    });
  };

  getPeople = () => {
    const { category, page } = this.state;
    fetchAny(category, page)
      .then(peoplePlanet => fetchPlanetInPeople(peoplePlanet))
      .then(peopleSpecies => fetchSpeciesInPeople(peopleSpecies))
      .then(cleanedPeople => cleanPeople(cleanedPeople))
      .then(people => this.setState({ people }));
  }

  getPlanets = () => {
    const { category, page } = this.state;
    fetchAny(category, page)
      .then(planetResidents => fetchPlanetResidents(planetResidents))
      .then(planets => this.setState({ planets }));
  }

  render() {
    return (
      <main>
        <Nav updateCategory={this.updateCategory} />
        <Cards />
      </main>
    );
  }
}

export default Main;
