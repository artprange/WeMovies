import { CardsContainer, MovieContainer } from './styles';
import { Button } from '../../components/AddToCartButton';
import { useCart } from '../../context/CartContext';
import { LoaderSpinner } from '../../components/LoaderSpinner/loader';
import { useMovies } from '../../hooks/useMovies';


export const Home = () => {
  const { movies, loading } = useMovies();
  const { addToCart, cart } = useCart();

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <CardsContainer>
      {movies.map((movie) => (
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
  );
};