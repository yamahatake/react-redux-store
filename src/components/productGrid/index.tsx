import type { FC } from 'react'
import { ProductItem } from 'components/productItem'
import { ProductType } from 'types/products'

export type ProductGridProps = {
  productsList: ProductType[]
}

const listProducts = (products: ProductType[] = []) => {
  if (!products) return false
  return products.map((product: ProductType) => {
    return (
      <ProductItem 
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
  const { productsList } = props
  return (
    <section className='grid-cols-4'>
      {listProducts(productsList)}
    </section>
  )
}
