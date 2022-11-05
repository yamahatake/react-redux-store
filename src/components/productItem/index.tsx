import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from 'types/products'

export const ProductItem: FC<ProductType> = (props) => {
  const {id, title, description, image, price, category} = props

  return (
    <Link to={`product/${id}`} key={id}>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>{price}</div>
      <span>{category}</span>
    </Link>
  )
}
