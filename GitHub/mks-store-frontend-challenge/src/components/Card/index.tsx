import { PriceTag } from '../PriceTag'
import { Product } from '../../integrations/api'
import {
  AddToCartButton,
  BagIcon,
  Box,
  CardContainer,
  ProductDescription,
  ProductDetail,
  ProductImage,
  ProductName,
  Skeleton,
  Text,
} from './styles'
import { addItem } from '../../store/store'
import { useAppDispatch } from '../../Hooks/redux'

const Card = (product: Product) => {
  const dispatch = useAppDispatch()

  return (
    <CardContainer>
      <ProductImage src={product.photo} alt={product.name} />
      <ProductDetail>
        <ProductName>{product.name}</ProductName>
        <PriceTag style={{ height: 30 }} price={+product.price} />
      </ProductDetail>
      <ProductDescription>{product.description}</ProductDescription>
      <div style={{ flex: 1 }}></div>
      <AddToCartButton onClick={() => dispatch(addItem(product))}>
        <BagIcon /> Comprar
      </AddToCartButton>
    </CardContainer>
  )
}

const CardSkeleton = () => {
  return (
    <Skeleton>
      <Box />
      <Text />
      <Text />
      <Text />
    </Skeleton>
  )
}

Card.Skeleton = CardSkeleton

export default Card
