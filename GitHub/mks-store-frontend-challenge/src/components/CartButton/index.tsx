import { FaShoppingCart } from 'react-icons/fa'
import {
  CardButtonContainer,
  Counter,
  WrapperIconMobile,
  WrapperIcon,
} from './styles'
import { selectProductsCount } from '../../store/store'
import { useAppSelector } from '../../Hooks/redux'

export interface CartButtonProps {
  onClick?: () => void
}

export const CartButton = ({ onClick }: CartButtonProps) => {
  const cartProductsCount = useAppSelector(selectProductsCount)

  return (
    <CardButtonContainer onClick={onClick}>
      <WrapperIconMobile>
        <FaShoppingCart size={12} />
      </WrapperIconMobile>
      <WrapperIcon>
        <FaShoppingCart size={20} />
      </WrapperIcon>
      <Counter>{cartProductsCount}</Counter>
    </CardButtonContainer>
  )
}
