import { CardsContainer, MovieContainer } from './styles'
import { useEffect, useState } from 'react'
import { fetchMovieData } from '../../services/fetchMovieData'
import { Button } from '../../components/AddToCartButton'
import { useCart } from '../../context/CartContext'

import { LoaderSpinner } from '../../components/LoaderSpinner/loader'
import { MovieDataTypes } from './types'



export const Home = () => {
  const [movies, setMovies] = useState<MovieDataTypes[]>([])
  const [loading, setLoading] = useState(true)

  const { addToCart, cart } = useCart()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await fetchMovieData()
        if (movieData && movieData.products) {
          setMovies(movieData.products)
        } else {
          console.error('Invalid movie data format:', movieData)
        }
      } catch (error) {
        console.error('Error fetching movie data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <LoaderSpinner />
  }

  return (
    <CardsContainer>
      {movies.map((movie: MovieDataTypes) => (
        <MovieContainer key={movie.id}>
          <img src={movie.image} alt={movie.title} />
          <p>{movie.title}</p>
          <h4>
            <span>R$</span>
            {movie.price.toFixed(2)}
          </h4>
          <Button
            movieId={movie.id}
            count={cart.find((item) => item.id === movie.id)?.quantity || 0}
            addToCart={() => addToCart({ ...movie, quantity: 1 })}
          />
        </MovieContainer>
      ))}
    </CardsContainer>
  )
}
