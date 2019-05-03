import React from "react";
import Card from "./Card";
import { shallow } from "enzyme";
describe("Card", () => {
  let wrapper;
  const mockProps = {
    category: "vehicle",
    display: [
      { name: "Luke", favorited: false },
      { name: "Obi", favorited: false },
      { name: "steve", favorited: false }
    ]
  };
  const mockUpdateFavorites = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <Card {...mockProps} updateFavorites={mockUpdateFavorites} />
    );
  });
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should invoke UpdateCategory when people button is clicked", () => {
    wrapper.find(".card-favorite-button").simulate("click", {
      target: {
        name: "mock-target"
      }
    });
    expect(mockUpdateFavorites).toHaveBeenCalled();
  });
  it("should have a default inline style when the card is not favorited", () =>{
    let buttonStyle = wrapper.find('.card-favorite-icon').get(0).props.style
    expect(buttonStyle).toHaveProperty('color', 'grey')
  })
});
