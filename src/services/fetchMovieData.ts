import axios from 'axios';


const API_URL = import.meta.env.VITE_API_URL || '';

export const fetchMovieData = async () => {
  if (!API_URL) {
    throw new Error('API_URL is not defined');
  }

  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error;
  }
};
