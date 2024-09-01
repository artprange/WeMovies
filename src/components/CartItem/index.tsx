import {
  ItemInfoContainer,
  ItemDescription,
  ItemQuantity,
  Subtotal,
} from './styles'
import add from '../../assets/icons/add.svg'
import remove from '../../assets/icons/remove.svg'
import trash from '../../assets/icons/trash.svg'

interface CartItemProps {
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

export function CartItem({
  item,
  onDelete,
  onIncrease,
  onDecrease,
}: CartItemProps) {
  return (
    <ItemInfoContainer>
      <ItemDescription>
        <img src={item.image} alt={item.title} />
        <div>
          <h2>{item.title}</h2>
          <h1>R$ {item.price.toFixed(2)}</h1>
        </div>
      </ItemDescription>
      <ItemQuantity>
        <button onClick={() => onDecrease(item.id)}>
          <img src={remove} alt="Decrease quantity" />
        </button>
        <input type="number" value={item.quantity} readOnly />
        <button onClick={() => onIncrease(item.id)}>
          <img src={add} alt="Increase quantity" />
        </button>
      </ItemQuantity>
      <Subtotal>
        <h5>SUBTOTAL</h5>
        <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
        <button onClick={() => onDelete(item.id)}>
          <img src={trash} alt="Delete" />
        </button>
      </Subtotal>
    </ItemInfoContainer>
  )
}
