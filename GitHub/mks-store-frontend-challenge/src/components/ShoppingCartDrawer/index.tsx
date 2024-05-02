import { ImCross } from 'react-icons/im'
import { ShoppingCartCard } from '../ShoppingCartCard'
import { useAppSelector } from '../../Hooks/redux'
import { selectProducts, selectTotal } from '../../store/store'
import { formatBrlCurrency } from '../../utils'
import {
  DrawerWrapper,
  CartDrawerContainer,
  CheckoutButton,
  Title,
  CloseButton,
  CartItems,
  TotalTextContainer,
} from './styles'

export interface ShoppingCartDrawer {
  visible: boolean
  onClose: () => void
}

export const ShoppingCartDrawer = ({
  visible,
  onClose,
}: ShoppingCartDrawer) => {
  const products = useAppSelector(selectProducts)
  const total = useAppSelector(selectTotal)
  return (
    <>
      <DrawerWrapper onClick={onClose} visible={visible}></DrawerWrapper>
      <CartDrawerContainer visible={visible}>
        <Title>
          Carrinho <br />
          de compras
        </Title>
        <CloseButton onClick={onClose}>
          <ImCross style={{ verticalAlign: 'middle' }} />
        </CloseButton>
        <CartItems>
          {products.map((product) => (
            <ShoppingCartCard key={product.id} product={product} />
          ))}
        </CartItems>
        <TotalTextContainer>
          <span>Total:</span>
          <span>{formatBrlCurrency(total)}</span>
        </TotalTextContainer>
        <CheckoutButton>Finalizar Compra</CheckoutButton>
      </CartDrawerContainer>
    </>
  )
}
