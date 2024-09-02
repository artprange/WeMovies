import { NavLink, useNavigate } from 'react-router-dom'

import notFound from '../../assets/images/notFound.svg'

import { useCart } from '../../context/CartContext'
import { CartItem } from '../../components/CartItem'
import { BackToHomeButton } from '../../components/BackToHomeButton'

import { LoaderSpinner } from '../../components/LoaderSpinner/loader'

import {
  CartContainer,
  ItemInfoHeader,
  CheckoutContainer,
  CheckoutButton,
  TotalAmount,
  EmptyCartContainer,
} from './styles'

export function Cart() {
  const { cart, removeItem, increaseQuantity, decreaseQuantity, clearCart } =
    useCart()
  const navigate = useNavigate()

  const loading = false

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  function handleDelete (itemId: number){
    removeItem(itemId)
  }

  function handleIncrease (itemId: number){
    increaseQuantity(itemId)
  }

  function handleDecrease (itemId: number){
    decreaseQuantity(itemId)
  }

  function handleCheckout (){
    navigate('/success', { state: { checkoutComplete: true } })
    clearCart() 
  }

  if (loading) {
    return <LoaderSpinner />
  }

  return (
    <CartContainer>
      {cart.length > 0 ? (
        <>
          <ItemInfoHeader>
            <div>produto</div>
            <div>qtd</div>
            <div>subtotal</div>
          </ItemInfoHeader>

          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onDelete={handleDelete}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
          ))}

          <CheckoutContainer>
            <CheckoutButton onClick={handleCheckout}>
              FINALIZAR PEDIDO
            </CheckoutButton>
            <TotalAmount>
              <h1>TOTAL</h1>
              <h3>
                R$<span></span>
                {total.toFixed(2)}
              </h3>
            </TotalAmount>
          </CheckoutContainer>
        </>
      ) : (
        <EmptyCartContainer>
          <p>Parece que não há nada por aqui :(</p>
          <img src={notFound} alt="Carrinho Vazio" />
          <NavLink to="/cart">
            <BackToHomeButton>Recarregar página</BackToHomeButton>
          </NavLink>
        </EmptyCartContainer>
      )}
    </CartContainer>
  )
}
