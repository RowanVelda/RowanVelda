import { PriceItemContainer } from './styles'
import { formatBrlCurrency } from '../../utils'

export interface PriceItemProps {
  price: number
}

export const PriceItem = ({ price }: PriceItemProps) => {
  return <PriceItemContainer>{formatBrlCurrency(price)}</PriceItemContainer>
}
