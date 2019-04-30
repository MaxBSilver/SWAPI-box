import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import Main from "./components/Main/Main";
import { cleanFilmFetch } from "./utility";

// map over an array of urls to fetch calls then use promise.all to determine if they are all loaded. If they are all loaded then begin the app, else run a loading screen
library.add(faJedi);
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomFilm: ""
    };
  }
  componentDidMount = () => {
    this.fetchRandomMovie();
  };

  fetchRandomMovie = async () => {
    let randomFilmNumber = Math.floor(Math.random() * 7) + 1;
    await fetch(`https://swapi.co/api/films/${randomFilmNumber}/`)
      .then(response => response.json())
      .then(film => this.setState({ randomFilm: cleanFilmFetch(film) }))
      .catch(error => console.log(error));
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
