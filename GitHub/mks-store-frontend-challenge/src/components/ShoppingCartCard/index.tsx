import { PriceItem } from '../PriceItem'
import {
  ShoppingCartContainer,
  RemoveFromCartButton,
  ImageCart,
  ProductName,
  WrapperShoppingCart,
  QtdText,
  RemoveCartButtonMobile,
} from './styles'
import { CounterItem } from '../CounterItem'
import {
  addItem,
  CountedProduct,
  reduceItem,
  removeItem,
} from '../../store/store'
import { useAppDispatch } from '../../Hooks/redux'
import { ImCross } from 'react-icons/im'

export interface ShoppingCartCardProps {
  product: CountedProduct
}

export const ShoppingCartCard = ({ product }: ShoppingCartCardProps) => {
  const dispatch = useAppDispatch()

  const decrement = () => {
    if (product.quantity > 1) {
      dispatch(reduceItem(product))
    }
  }

  return (
    <ShoppingCartContainer>
      <RemoveFromCartButton onClick={() => dispatch(removeItem(product))}>
        <ImCross
          size={8}
          style={{
            verticalAlign: 'middle',
            margin: '-1 -1.5 1 -1',
            color: '#fff',
          }}
        />
      </RemoveFromCartButton>
      <RemoveCartButtonMobile onClick={() => dispatch(removeItem(product))}>
        X
      </RemoveCartButtonMobile>
      <ImageCart src={product.photo} alt={product.name} />
      <ProductName>{product.name}</ProductName>

      <WrapperShoppingCart>
        <QtdText>Qtd:</QtdText>
        <CounterItem
          quantity={product.quantity}
          onAdd={() => dispatch(addItem(product))}
          onSub={decrement}
        ></CounterItem>
        <PriceItem price={+product.price * product.quantity} />
      </WrapperShoppingCart>
    </ShoppingCartContainer>
  )
}
