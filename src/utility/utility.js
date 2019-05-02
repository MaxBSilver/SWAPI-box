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
      Name: person.name,
      Homeworld: person.homeworld.name,
      Population: person.homeworld.population,
      Species: person.species.name,
      favorited: false
    };
    return cleanPerson;
  });
  return cleanedPeople;
};

const cleanPlanetData = uncleanPlanetData => {
  let cleanedPlanets = uncleanPlanetData.map(planet => {
    let cleanPlanet = {
      Name: planet.name,
      Terrain: planet.terrain,
      Population: planet.population,
      Climate: planet.climate,
      Residents: planet.residents.map(resident => resident.name).join(", "),
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
      Name: vehicle.name,
      Model: vehicle.model,
      Class: vehicle.vehicle_class,
      Passengers: vehicle.passengers,
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
