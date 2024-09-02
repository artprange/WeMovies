import { MovieDataTypes } from "../pages/Home/types";



export const orderMoviesById = (movies: MovieDataTypes[]) => {
  const order = [1, 3, 2, 5, 6, 4];
  return movies.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
};
