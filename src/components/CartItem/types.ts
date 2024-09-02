export interface CartItemProps {
    item: {
      id: number
      title: string
      price: number
      image: string
      quantity: number
    }
    onDelete: (id: number) => void
    onIncrease: (id: number) => void
    onDecrease: (id: number) => void
  }