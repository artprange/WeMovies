import { createContext, useState, useContext, ReactNode, FC } from 'react'


interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}


interface CartContextType {
  cart: CartItem[]
  addToCart: (movie: CartItem) => void
  removeItem: (itemId: number) => void
  increaseQuantity: (itemId: number) => void
  decreaseQuantity: (itemId: number) => void
  clearCart: () => void // Nova função para limpar o carrinho
}


const CartContext = createContext<CartContextType | undefined>(undefined)

// cart context provider
export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]) // Estado para armazenar os itens do carrinho

  // add item to cart
  const addToCart = (movie: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === movie.id)
      if (existingItem) {
        
        return prevCart.map((item) =>
          item.id === movie.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      } else {
        
        return [...prevCart, { ...movie, quantity: 1 }]
      }
    })
  }

  // remove item from cart
  const removeItem = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
  }

  // add item quantity
  const increaseQuantity = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  // subtract item quantity
  const decreaseQuantity = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    )
  }

  // empty cart
  const clearCart = () => {
    setCart([]) 
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('somehing broke in the cart contex :( ')
  }
  return context
}
