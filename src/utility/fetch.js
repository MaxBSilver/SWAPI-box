import { cleanFilmFetch, randomNumber } from "./utility";

const url = "https://swapi.co/api/";

const fetchAny = async (category, page) => {
  const fetchUrl = `${url + category}/?page=${page}`;
  let response = await fetch(fetchUrl);
  let result = await response.json();
  return result;
};


// * Fetch people chain fetchAny => fetchPlanetInPeople => fetchSpeciesInPeople *\\

const fetchPlanetInPeople = peopleData => {
  const people = peopleData.results.map(async person => {
    const response = await fetch(person.homeworld);
    const homeworld = await response.json();
    const personData = { ...person, homeworld };
    return personData;
  });
  return Promise.all(people);
};

const fetchSpeciesInPeople = (peopleData) => {
  const people = peopleData.map( async person => {
    const response = await fetch(person.species[0]);
    const species = await response.json();
    const personData = { ...person, species };
    return personData;
  })
  return Promise.all(people);
}

const fetchRandomMovie = async () => {
  const randomFilmNumber = randomNumber();
  let response = await fetch(`${url}films/${randomFilmNumber}/`);
  let result = await response.json();
  return cleanFilmFetch(result);
};



// * Fetch planets chain fetchAny => fetchPlanetResidents *\\

const fetchPlanetResidents = (planetsData) => {
  const planets = planetsData.results.map(planet => {
    console.log(planet.residents)
  })
}

export { fetchRandomMovie, fetchAny, fetchPlanetInPeople, fetchSpeciesInPeople, fetchPlanetResidents };
