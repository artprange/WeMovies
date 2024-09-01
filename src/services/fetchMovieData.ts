import axios from 'axios'

export const API_URL = 'https://wefit-movies.vercel.app/api/movies'

export const fetchMovieData = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    console.log('there was an error', error)
    throw error
  }
}
