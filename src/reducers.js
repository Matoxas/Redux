// import { combineReducers } from "redux";

const initialState = {
  movies: [],
  genres: [],
  hearted: []
};

// const logs = {
//   logs: []
// };

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIE_LIST":
      return { ...state, movies: action.movies };
    case "SET_GENRE_LIST":
      return { ...state, genres: action.genres };
    case "ADD_HEART":
      return { ...state, hearted: [...state.hearted, action.id] };
    case "REMOVE HEART":
      return {
        ...state,
        hearted: state.hearted.filter(currentId => currentId !== action.id)
      };

    default:
      return state;
  }
};

export default mainReducer;

// const logsReducer = (state = logs, action) => {
//   switch (action.type) {
//     case "ADD_NEW_LOG":
//       return { ...state, logs: action.log };
//     default:
//       return state;
//   }
// };
