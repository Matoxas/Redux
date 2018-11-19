import React from "react";
import { getGenres } from "../thunks";
import { connect } from "react-redux";
import { getMoviesByGenre } from "../thunks";

class Genres extends React.Component {
  constructor(props) {
    super(props);

    this.props.onRequestGenres();
  }

  requestGenresMovies = id => {
    const { onGetMoviesByGenre } = this.props;
    onGetMoviesByGenre(id);
  };

  setGenreList = genres => {
    this.setState({
      genres
    });
  };

  render() {
    const { genres } = this.props;

    return (
      <div className="genres">
        {genres.map(genre => (
          <div
            key={genre.id}
            className="genre"
            onClick={() => this.requestGenresMovies(genre.id)}
          >
            {genre.name}
          </div>
        ))}
      </div>
    );
  }
}

const MapDispatchToProps = dispatch => {
  return {
    onRequestGenres: () => dispatch(getGenres()),
    onGetMoviesByGenre: genre => dispatch(getMoviesByGenre(genre))
  };
};

const MapStateToProps = state => {
  return {
    genres: state.genres
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Genres);
