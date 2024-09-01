import { createContext, useState, useContext, ReactNode, FC } from 'react'

// Definição da interface para os itens do carrinho
interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}

// Definição do tipo do contexto do carrinho
interface CartContextType {
  cart: CartItem[]
  addToCart: (movie: CartItem) => void
  removeItem: (itemId: number) => void
  increaseQuantity: (itemId: number) => void
  decreaseQuantity: (itemId: number) => void
  clearCart: () => void // Nova função para limpar o carrinho
}

// Criação do contexto com um valor inicial indefinido
const CartContext = createContext<CartContextType | undefined>(undefined)

// Provedor do contexto do carrinho
export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]) // Estado para armazenar os itens do carrinho

  // Função para adicionar um item ao carrinho
  const addToCart = (movie: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === movie.id)
      if (existingItem) {
        // Se o item já existe no carrinho, aumenta a quantidade
        return prevCart.map((item) =>
          item.id === movie.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      } else {
        // Se o item não existe, adiciona um novo item ao carrinho
        return [...prevCart, { ...movie, quantity: 1 }]
      }
    })
  }

  // Função para remover um item do carrinho
  const removeItem = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
  }

  // Função para aumentar a quantidade de um item
  const increaseQuantity = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  // Função para diminuir a quantidade de um item
  const decreaseQuantity = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    )
  }

  // Função para limpar o carrinho
  const clearCart = () => {
    setCart([]) // Define o estado do carrinho como um array vazio
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
