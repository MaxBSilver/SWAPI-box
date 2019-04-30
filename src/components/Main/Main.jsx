import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Cards from "../Cards/Cards";
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: ''
    };
  }
  updateCategory = (updatedCategory) => {
    this.setState({category: updatedCategory})
  }

  render() {
    return (
      <main>
        <Nav updateCategory={this.updateCategory} />
        <Cards />
      </main>
    );
  }
}

export default Main;
