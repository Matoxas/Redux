export const setMovieList = movies => ({
  type: "SET_MOVIE_LIST",
  movies
});

export const setGenreList = genres => ({
  type: "SET_GENRE_LIST",
  genres
});

export const addHeart = id => ({
  type: "ADD_HEART",
  id
});

export const removeHeart = id => ({
  type: "REMOVE_HEART",
  id
});
