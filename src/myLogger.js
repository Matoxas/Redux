const findMovie = (id, movies) => {
  return movies.find(movie => movie.id == id).title;
};

const findGenre = (id, genres) => {
  return {};
};

const myLogger = store => next => action => {
  switch (action.type) {
    case "SET_MOVIE_LIST":
      console.log(new Date().toLocaleString(), " aplikacija uzkrauta");
      break;
    case "ADD_HEART":
      console.log(
        new Date().toLocaleString(),
        " sirdele uzdeta: ",
        findMovie(action.id, store.getState().movies)
      );
      break;
    case "REMOVE_HEART":
      console.log(
        new Date().toLocaleString(),
        " sirdele nuimta: ",
        findMovie(action.id, store.getState().movies)
      );
      break;
    case "REMOVE_HEART":
      console.log(
        new Date().toLocaleString(),
        " sirdele nuimta: ",
        findMovie(action.id, store.getState().movies)
      );
      break;
    default:
      break;
  }
  next(action);
};

export default myLogger;
