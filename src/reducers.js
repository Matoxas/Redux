// import { combineReducers } from "redux";

const initialState = {
  movies: [],
  genres: []
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIE_LIST":
      return { ...state, movies: action.movies };
    case "SET_GENRE_LIST":
      return { ...state, genres: action.genres };

    default:
      return state;
  }
};

export default moviesReducer;
// export default combineReducers({
//   movies: moviesReducer
// });
