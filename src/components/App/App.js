import React from "react";
import Main from "../Main/Main";
import { fetchRandomMovie } from "../../utility/fetch";
import Loading from "../Loading/Loading";

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
          <h1><img src="https://i.imgur.com/67trXj2.png"/></h1>
        </header>
        {loading && <Loading />}
        {!loading && <Main {...this.state.randomFilm} />}
      </div>
    );
  }
}

export default App;
