import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have a default state", () => {
    expect(wrapper.state("randomFilm")).toEqual('');
    expect(wrapper.state("loading")).toEqual(true);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
