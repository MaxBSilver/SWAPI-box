const cleanFilmFetch = film => {
  const { title, opening_crawl, release_date } = film;
  return { title: title, crawl: opening_crawl, date: release_date };
};

const randomNumber = () => {
  return Math.floor(Math.random() * 7) + 1;
};

const cleanPeopleData = uncleanPeopleData => {
  let cleanedPeople = uncleanPeopleData.map(person => {
    let cleanPerson = {
      name: person.name,
      homeworld: person.homeworld.name,
      population: person.homeworld.population,
      species: person.species.name,
      favorited: false
    };
    return cleanPerson;
  });
  return cleanedPeople;
};

const cleanPlanetData = uncleanPlanetData => {
  let cleanedPlanets = uncleanPlanetData.map(planet => {
    let cleanPlanet = {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: planet.residents.map(resident => resident.name).join(", "),
      favorited: false
    };
    return cleanPlanet;
  });
  return cleanedPlanets;
};
const cleanVehicleData = uncleanVehicleData => {
  let uncleanVehicles = uncleanVehicleData.results;
  const cleanVehicles = uncleanVehicles.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers,
      favorited: false
    };
  });

  return cleanVehicles;
};

export {
  cleanFilmFetch,
  randomNumber,
  cleanPeopleData,
  cleanVehicleData,
  cleanPlanetData
};
