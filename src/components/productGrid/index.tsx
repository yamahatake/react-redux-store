import type { FC } from 'react'
import { ProductItem } from 'components/productItem'
import { ProductType } from 'types/products'

export type ProductGridProps = {
  productList?: ProductType[]
}

const listProducts = (products: ProductType[] = []) => {
  if (!products) return false
  return products.map((product: ProductType) => {
    return (
      <ProductItem 
        key={product?.id}
        id={product?.id}
        title={product?.title}
        description={product?.description}
        image={product?.image}
        price={product?.price}
        category={product?.category}
      />
    )
  })
}

export const ProductGrid: FC<ProductGridProps> = (props) => {
  const { productList } = props
  return (
    <section className='grid-cols-4'>
      {listProducts(productList)}
    </section>
  )
}
