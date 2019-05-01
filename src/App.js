import React from "react";
import Main from "./components/Main/Main";
import { fetchRandomMovie } from "./utility/fetch";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomFilm: ""
    };
  }
  componentDidMount = () => {
    fetchRandomMovie().then(randomFilm => this.setState({ randomFilm }));
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>SWAPI-box</h1>
        </header>
        <Main {...this.state.randomFilm} />
      </div>
    );
  }
}

export default App;
