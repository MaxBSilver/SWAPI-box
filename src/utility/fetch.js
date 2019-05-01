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

const fetchSpeciesInPeople = peopleData => {
  const people = peopleData.map(async person => {
    const response = await fetch(person.species[0]);
    const species = await response.json();
    const personData = { ...person, species };
    return personData;
  });
  return Promise.all(people);
};

// * Fetch planets chain fetchAny => fetchPlanetResidents *\\

const fetchPlanetResidents =  planetsData => {
  const planets = planetsData.results.map( planet => {
    return mapResidents(planet).then(data=> ({...planet, residents: data}))
    // console.log('resolved?: ', residents);
      // const planetWithResidents = { ...planet, residents: residents };
      // return planetWithResidents

    // promises are unresolved here and then get set to state from this return
  });
  return Promise.all(planets);
};

const mapResidents =  planet => {
  const residents = planet.residents.map( resident => {
    const residentInfo = fetchResident(resident);
    return residentInfo;
  });
  console.log('unresolved: ', residents);
  // ! promise.all should resolve these promises? but it returns the unresolved promises
  // here i am trying to resolve the promises before returning them
  return Promise.all(residents);
};

const fetchResident = resident => {
  // each individual promise for a resident fetch
  let response = fetch(resident).then(residentInfo => residentInfo.json());
  return response;
};

// * fetchMovie

const fetchRandomMovie = async () => {
  const randomFilmNumber = randomNumber();
  let response = await fetch(`${url}films/${randomFilmNumber}/`);
  let result = await response.json();
  return cleanFilmFetch(result);
};

export {
  fetchRandomMovie,
  fetchAny,
  fetchPlanetInPeople,
  fetchSpeciesInPeople,
  fetchPlanetResidents
};
