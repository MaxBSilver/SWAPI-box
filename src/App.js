import React from "react";
import Main from "./components/Main/Main";
import { fetchRandomMovie } from "./fetch";
import Loading from "./components/Loading/Loading";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomFilm: "",
      loading: true
    };
  }
  componentDidMount = () => {
    this.setState({ loading: true });
    fetchRandomMovie().then(randomFilm =>
      this.setState({ randomFilm }, () => {
        this.setState({ loading: false });
      })
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        <header>
          <h1>SWAPI-box</h1>
        </header>
        {loading && <Loading />}
        {!loading && <Main {...this.state.randomFilm} />}
      </div>
    );
  }
}

export default App;
