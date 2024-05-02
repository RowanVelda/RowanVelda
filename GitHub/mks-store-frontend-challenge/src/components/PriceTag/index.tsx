import { PriceTagContainer } from './styles'
import { formatBrlCurrency } from '../../utils'
import { CSSProperties } from 'react'

export interface PriceTagProps {
  price: number
  style?: CSSProperties
}

export const PriceTag = ({ price, style }: PriceTagProps) => {
  return (
    <PriceTagContainer style={style}>
      {formatBrlCurrency(price)}
    </PriceTagContainer>
  )
}
