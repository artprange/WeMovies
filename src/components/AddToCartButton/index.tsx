import addToCartIcon from '../../assets/icons/addToCartIcon.svg'
import { AddedToCart, EmptyCartButton } from './styles'

interface ButtonProps {
  movieId: number
  count: number
  addToCart: () => void
}

export function Button({ count, addToCart }: ButtonProps) {
  return count > 0 ? (
    <AddedToCart onClick={addToCart}>
      <img src={addToCartIcon} alt="adicionar ao carrinho" />
      <span>{count}</span>
      adicionar ao carrinho
    </AddedToCart>
  ) : (
    <EmptyCartButton onClick={addToCart}>
      <img src={addToCartIcon} alt="adicionar ao carrinho" />
      <span>{count}</span>
      adicionar ao carrinho
    </EmptyCartButton>
  )
}
