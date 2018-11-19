const initialState = {
  movies: [],
  genres: [],
  hearted: []
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIE_LIST":
      return { ...state, movies: action.movies };
    case "SET_GENRE_LIST":
      return { ...state, genres: action.genres };
    case "ADD_HEART":
      return { ...state, hearted: [...state.hearted, action.id] };
    case "REMOVE_HEART":
      return {
        ...state,
        hearted: state.hearted.filter(currentId => currentId !== action.id)
      };

    default:
      return state;
  }
};

export default mainReducer;
