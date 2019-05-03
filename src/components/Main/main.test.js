import React from "react";
import Main from "./Main";
import { shallow } from "enzyme";
import { fetchAny } from '../../utility/fetch'

describe("Main", () => {
  let wrapper;

  let mockCategoryDataArray = [
    {
      Climate: "temperate",
      Name: "Tatooine",
      Population: "2000000000",
      Residents: "Leia Organa, Bail Prestor Organa, Raymus Antilles",
      Terrain: "grasslands, mountains",
      favorited: false
    },
    {
      Climate: "temperate",
      Name: "Naboo",
      Population: "2000000000",
      Residents: "Leia Organa, Bail Prestor Organa, Raymus Antilles",
      Terrain: "grasslands, mountains",
      favorited: false
    },
    {
      Climate: "temperate",
      Name: "Alderaan",
      Population: "2000000000",
      Residents: "Leia Organa, Bail Prestor Organa, Raymus Antilles",
      Terrain: "grasslands, mountains",
      favorited: true
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<Main />);
  });
  afterEach(() => {
    jest.clearAllMocks();
    wrapper.setState({
      loading: false,
      category: "",
      display: "",
      page: 1,
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    });
  });
  describe("Default", () => {
    it("should match the snapshot with all data passed in", () => {
      expect(wrapper).toMatchSnapshot();
    });
    it("should have a default state", () => {
      expect(wrapper.state("loading")).toEqual(false);
      expect(wrapper.state("category")).toEqual("");
      expect(wrapper.state("display")).toEqual("");
      expect(wrapper.state("page")).toEqual(1);
      expect(wrapper.state("people")).toEqual([]);
      expect(wrapper.state("vehicles")).toEqual([]);
      expect(wrapper.state("planets")).toEqual([]);
      expect(wrapper.state("favorites")).toEqual([]);
    });
  });
  describe("UpdateCategory", () => {
    it("should update category within state when updateCategory is called", () => {
      let mockButtonData = "planets";
      wrapper.instance().updateCategory(mockButtonData);
      expect(wrapper.state("category")).toEqual("planets");
    });
    it("should invoke getPlanets if there is not data in planets in state", () => {
      let mockCategory = "planets";
      wrapper.instance().getPlanets = jest.fn();
      wrapper.instance().selectCategory(mockCategory);
      expect(wrapper.instance().getPlanets).toHaveBeenCalled();
    });
    it("should not invoke getPlanets if there is data in planets in state", () => {
      let mockCategory = "people";
      wrapper.setState({ people: mockCategoryDataArray });
      wrapper.instance().getPeople = jest.fn();
      wrapper.instance().selectCategory(mockCategory);
      expect(wrapper.instance().getPeople).not.toHaveBeenCalled();
    });
    it("should invoke getPeople if there is not data in planets in state", () => {
      let mockCategory = "people";
      wrapper.instance().getPeople = jest.fn();
      wrapper.instance().selectCategory(mockCategory);
      expect(wrapper.instance().getPeople).toHaveBeenCalled();
    });
    it("should not invoke getPeople if there is data in planets in state", () => {
      let mockCategory = "people";
      wrapper.setState({ people: mockCategoryDataArray });
      wrapper.instance().getPeople = jest.fn();
      wrapper.instance().selectCategory(mockCategory);
      expect(wrapper.instance().getPeople).not.toHaveBeenCalled();
    });
    it("should invoke getVehicles if there is not data in planets in state", () => {
      let mockCategory = "vehicles";
      wrapper.instance().getVehicles = jest.fn();
      wrapper.instance().selectCategory(mockCategory);
      expect(wrapper.instance().getVehicles).toHaveBeenCalled();
    });
    it("should not invoke getVehicles if there is data in planets in state", () => {
      let mockCategory = "vehicles";
      wrapper.setState({ vehicles: mockCategoryDataArray });
      wrapper.instance().getVehicles = jest.fn();
      wrapper.instance().selectCategory(mockCategory);
      expect(wrapper.instance().getVehicles).not.toHaveBeenCalled();
    });
  });
//   describe("getPeople", () => {
//     it("should set the state of loading to true", () => {
//       wrapper.instance().getPeople();
//       expect(wrapper.state("loading")).toEqual(true);
//       expect(fetchAny).toHaveBeenCalled();
//     });
//   });
  describe("updateFavorites", () => {
    it("should set the state of loading to true", () => {
      wrapper.setState({ category: "planets", planets: mockCategoryDataArray });
      wrapper.instance().mapFavorites = jest.fn().mockReturnValue([
        {
          Climate: "temperate",
          Name: "Alderaan",
          Population: "2000000000",
          Residents: "Leia Organa, Bail Prestor Organa, Raymus Antilles",
          Terrain: "grasslands, mountains",
          favorited: true
        }
      ]);
      wrapper.instance().updateFavoritesInState = jest.fn();
      wrapper.instance().updateFavorites();
      expect(wrapper.instance().mapFavorites).toHaveBeenCalled();
      expect(wrapper.instance().updateFavoritesInState).toHaveBeenCalled();
      expect(wrapper.state("planets")).toHaveLength(1);
    });
  });

  it("should concat the category arrays and set the state to only the items that are favorited", () => {
    wrapper.setState({
      planets: mockCategoryDataArray,
      people: mockCategoryDataArray,
      vehicles: mockCategoryDataArray
    });
    wrapper.instance().updateFavoritesInState();
    expect(wrapper.state("favorites")).toHaveLength(3);
  });
  it("should map through an array and favorite the item with the same name as the target", () => {
    let arrayWithFavorites = mockCategoryDataArray;
    expect(arrayWithFavorites[0]).toHaveProperty("favorited", false);
    expect(arrayWithFavorites[1]).toHaveProperty("favorited", false);
    expect(arrayWithFavorites[2]).toHaveProperty("favorited", true);
    arrayWithFavorites = wrapper
      .instance()
      .mapFavorites(mockCategoryDataArray, "Naboo");
    expect(arrayWithFavorites[0]).toHaveProperty("favorited", false);
    expect(arrayWithFavorites[1]).toHaveProperty("favorited", true);
    expect(arrayWithFavorites[2]).toHaveProperty("favorited", true);
  });
});
