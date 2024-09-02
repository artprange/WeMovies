import { MovieDataTypes } from "../pages/Home/types";
import { fetchMovieData } from "../services/fetchMovieData";
import { orderMoviesById } from "../utils/moviesRenderOrder";
import { useState, useEffect } from 'react';


export const useMovies = () => {
  const [movies, setMovies] = useState<MovieDataTypes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await fetchMovieData();
        if (movieData && movieData.products) {
          const orderedMovies = orderMoviesById(movieData.products);
          setMovies(orderedMovies);
        } else {
          console.error('Invalid movie data format:', movieData);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { movies, loading };
};
