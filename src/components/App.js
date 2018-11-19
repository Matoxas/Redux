import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import Genres from "./Genres";
import { setMovieList } from "../actions";
import { getPopularMovies } from "../thunks";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      hearted: []
    };
  }

  componentDidMount() {
    const { onGetPopularMovies } = this.props;

    onGetPopularMovies();
  }

  addHeart = id => {
    const { hearted } = this.state;

    this.setState({
      hearted: [...hearted, id]
    });
  };

  removeHeart = id => {
    const { hearted } = this.state;

    this.setState({
      hearted: hearted.filter(currentId => currentId !== id)
    });
  };

  render() {
    const { hearted } = this.state;
    const { movies } = this.props;

    return (
      <React.Fragment>
        <Genres />

        <div className="cards">
          {movies.map(movie => (
            <Card
              key={movie.id}
              isHearted={hearted.includes(movie.id)}
              onAddHeart={() => this.addHeart(movie.id)}
              onRemoveHeart={() => this.removeHeart(movie.id)}
              movie={movie}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const MapDispatchToProps = dispatch => {
  return {
    onGetPopularMovies: () => dispatch(getPopularMovies())
    // onSetMovieList: list => dispatch(setMovieList(list))
  };
};

const MapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(App);
