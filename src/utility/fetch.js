import { cleanFilmFetch, randomNumber } from "./utility";

const url = "https://swapi.co/api/";

const fetchAny = (category, page) => {
  const fetchUrl = `${url + category}/?page=${page}`;
  return fetch(fetchUrl).then(response => response.json());
};

// * Fetch people chain fetchAny => fetchPlanetInPeople => fetchSpeciesInPeople *\\

const fetchPlanetInPeople = peopleData => {
  const people = peopleData.results.map(person => {
    return fetch(person.homeworld)
      .then(response => response.json())
      .then(homeworld => ({ ...person, homeworld: homeworld }));
  });
  return Promise.all(people);
};

const fetchSpeciesInPeople = peopleData => {
  const people = peopleData.map(async person => {
    return fetch(person.species[0])
      .then(response => response.json())
      .then(species => ({ ...person, species: species }));
  });
  return Promise.all(people);
};

// * Fetch planets chain fetchAny => fetchPlanetResidents *\\

const fetchPlanetResidents = planetsData => {
  const planets = planetsData.results.map(planet => {
    return mapResidents(planet).then(data => ({
      ...planet,
      residents: data
    }));
  });
  return Promise.all(planets);
};

const mapResidents = planet => {
  const residents = planet.residents.map(resident => {
    const residentInfo = fetchResident(resident);
    return residentInfo;
  });
  return Promise.all(residents);
};

const fetchResident = resident => {
  let response = fetch(resident).then(residentInfo => residentInfo.json());
  return response;
};

// * fetchMovie

const fetchRandomMovie = () => {
  const randomFilmNumber = randomNumber();
  return fetch(`${url}films/${randomFilmNumber}/`)
    .then(response => response.json())
    .then(result => cleanFilmFetch(result));
};

export {
  fetchRandomMovie,
  fetchAny,
  fetchPlanetInPeople,
  fetchSpeciesInPeople,
  fetchPlanetResidents
};
