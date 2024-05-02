import {
  CounterItemContainer,
  Counter,
  ButtonCounter,
  ButtonCounterLess,
} from './styles'

export interface CounterItemProps {
  quantity: number
  onAdd: () => void
  onSub: () => void
}

export const CounterItem = ({
  onSub,
  quantity = 1,
  onAdd,
}: CounterItemProps) => {
  return (
    <CounterItemContainer>
      <ButtonCounterLess
        disabled={quantity === 1}
        onClick={onSub}
        style={{ lineHeight: '2px' }}
      >
        -
      </ButtonCounterLess>
      <Counter>{quantity}</Counter>
      <ButtonCounter onClick={onAdd} style={{ lineHeight: '27px' }}>
        +
      </ButtonCounter>
    </CounterItemContainer>
  )
}
