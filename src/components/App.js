import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import Genres from "./Genres";
import { getPopularMovies } from "../thunks";

class App extends React.Component {
  componentDidMount() {
    const { onGetPopularMovies } = this.props;

    onGetPopularMovies();
  }

  render() {
    const { movies } = this.props;

    return (
      <React.Fragment>
        <Genres />

        <div className="cards">
          {movies.map(movie => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const MapDispatchToProps = dispatch => {
  return {
    onGetPopularMovies: () => dispatch(getPopularMovies())
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
