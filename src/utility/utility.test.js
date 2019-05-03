import { cleanFilmFetch, cleanPeopleData, cleanPlanetData, cleanVehicleData } from "./utility";
describe("Utility", () => {
  let mockData = {
    title: "movie-1",
    opening_crawl: "galaxy far far away",
    release_date: "july"
  };
  it("Should return an object with the properties of title, crawl, date", () => {
    let cleanedFilm = cleanFilmFetch(mockData);
    expect(cleanedFilm).toMatchObject({
      title: "movie-1",
      crawl: "galaxy far far away",
      date: "july"
    });
  });
  it("Should clean people data and return an object with keys Name, HomeWorld, Population, Species, favorited", () => {
    let mockUncleanPeople = [
      {
        birth_year: "19BBY",
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:56.891000Z",
        eye_color: "blue",
        films: (5)[
          ("https://swapi.co/api/films/2/",
          "https://swapi.co/api/films/6/",
          "https://swapi.co/api/films/3/",
          "https://swapi.co/api/films/1/",
          "https://swapi.co/api/films/7/")
        ],
        gender: "male",
        hair_color: "blond",
        height: "172",
        homeworld: {
          name: "Tatooine",
          rotation_period: "23",
          orbital_period: "304",
          diameter: "10465",
          climate: "arid",
          population: "200,000"
        },
        mass: "77",
        name: "Luke Skywalker",
        skin_color: "fair",
        species: {
          name: "Human",
          classification: "mammal",
          designation: "sentient",
          average_height: "180",
          skin_colors: "caucasian, black, asian, hispanic"
        },
        starships: (2)[
          ("https://swapi.co/api/starships/12/",
          "https://swapi.co/api/starships/22/")
        ],
        url: "https://swapi.co/api/people/1/"
      }
    ];
    let cleanedPeople = cleanPeopleData(mockUncleanPeople);
    expect(cleanedPeople[0]).toMatchObject({
      Name: "Luke Skywalker",
      Species: "Human",
      Homeworld: "Tatooine",
      Population: "200,000"
    });
  });
  it("should clean planetData if there are no residents", () => {
    let mockUncleanPlanets = [
      {
        climate: "temperate",
        created: "2014-12-10T11:35:48.479000Z",
        diameter: "12500",
        edited: "2014-12-20T20:58:18.420000Z",
        gravity: "1 standard",
        name: "Alderaan",
        orbital_period: "364",
        population: "2000000000",
        residents: [],
        rotation_period: "24",
        surface_water: "40",
        terrain: "grasslands, mountains",
        url: "https://swapi.co/api/planets/2/"
      }
    ];
    let cleanedPlanets = cleanPlanetData(mockUncleanPlanets);
    expect(cleanedPlanets[0]).toMatchObject({
      Name: "Alderaan",
      Terrain: "grasslands, mountains",
      Climate: "temperate",
      Population: "2000000000",
      Residents: "none"
    });
  });
  it("should clean planetData", () => {
    let mockUncleanPlanets = [
      {
        climate: "temperate",
        created: "2014-12-10T11:35:48.479000Z",
        diameter: "12500",
        edited: "2014-12-20T20:58:18.420000Z",
        gravity: "1 standard",
        name: "Alderaan",
        orbital_period: "364",
        population: "2000000000",
        residents: [{name : "luke"}],
        rotation_period: "24",
        surface_water: "40",
        terrain: "grasslands, mountains",
        url: "https://swapi.co/api/planets/2/"
      }
    ];
    let cleanedPlanets = cleanPlanetData(mockUncleanPlanets);
    expect(cleanedPlanets[0]).toMatchObject({
      Name: "Alderaan",
      Terrain: "grasslands, mountains",
      Climate: "temperate",
      Population: "2000000000",
      Residents: "luke"
    });
  });
  it("should clean vehicle data ", () => {
    let uncleanVehicleData = {
        results : [
      {
        cargo_capacity: "50000",
        consumables: "2 months",
        cost_in_credits: "150000",
        created: "2014-12-10T15:36:25.724000Z",
        crew: "46",
        edited: "2014-12-22T18:21:15.523587Z",
        length: "36.8",
        manufacturer: "Corellia Mining Corporation",
        max_atmosphering_speed: "30",
        model: "Digger Crawler",
        name: "Sand Crawler",
        passengers: "30",
        pilots: [],
        url: "https://swapi.co/api/vehicles/4/",
        vehicle_class: "wheeled"
      } ]
    };
    let cleanedVehicleData = cleanVehicleData(uncleanVehicleData);
    expect(cleanedVehicleData[0]).toMatchObject({Name: "Sand Crawler", Model: "Digger Crawler", Class: "wheeled", Passengers: "30"})
  });
});
