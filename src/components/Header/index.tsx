import {
  CartContainer,
  HeaderContainer,
  CartImageContainer,
  CartDetailsContainer,
} from './styles'
import cartIcon from '../../assets/icons/cartICon.svg'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export function Header() {
  const { cart } = useCart()

  // calculating the total number of items in the cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <h1>WeMovies</h1>
      </NavLink>
      <CartContainer>
        <CartDetailsContainer>
          <h3>Meu carrinho</h3>
          <span>
            {totalItems} {totalItems === 1 ? 'item' : 'itens'}
          </span>
        </CartDetailsContainer>
        <NavLink to="/cart">
          <CartImageContainer>
            <img src={cartIcon} alt="" />
          </CartImageContainer>
        </NavLink>
      </CartContainer>
    </HeaderContainer>
  )
}
