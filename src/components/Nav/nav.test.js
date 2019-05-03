import React from "react";
import Nav from "./Nav";
import { shallow } from "enzyme";
describe("Nav", () => {
  let wrapper;
  const mockUpdateCategory = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Nav updateCategory={mockUpdateCategory} />);
  });
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should invoke UpdateCategory when people button is clicked", () => {
    wrapper.find(".nav-people-btn").simulate("click", {
      target: {
        name: "mock-target"
      }
    });
    expect(mockUpdateCategory).toHaveBeenCalled();
  });
  it("should invoke UpdateCategory when vehicle button is clicked", () => {
    wrapper.find(".nav-vehicles-btn").simulate("click", {
      target: {
        name: "mock-target"
      }
    });
    expect(mockUpdateCategory).toHaveBeenCalled();
  });
  it("should invoke UpdateCategory when planets button is clicked", () => {
    wrapper.find(".nav-planets-btn").simulate("click", {
      target: {
        name: "mock-target"
      }
    });
    expect(mockUpdateCategory).toHaveBeenCalled();
  });
  it("should invoke UpdateCategory when favorites button is clicked", () => {
    wrapper.find(".nav-favorites-btn").simulate("click", {
      target: {
        name: "mock-target"
      }
    });
    expect(mockUpdateCategory).toHaveBeenCalled();
  });
});
