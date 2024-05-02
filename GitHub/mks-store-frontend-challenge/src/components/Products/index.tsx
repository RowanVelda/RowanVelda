import { Product } from '../../integrations/api'
import Card from '../Card'
import { ContainerProduct } from './styles'

export interface ProductsProps {
  products: Product[]
  loading: boolean
  skeletonsCount?: number
}

const Products = ({ products, loading, skeletonsCount = 8 }: ProductsProps) => {
  return (
    <ContainerProduct>
      {loading
        ? Array.from({ length: skeletonsCount }).map((_, i) => (
            <Card.Skeleton key={i} />
          ))
        : products.map((product) => (
            <li key={product.id}>
              <Card {...product}></Card>
            </li>
          ))}
    </ContainerProduct>
  )
}

export default Products
