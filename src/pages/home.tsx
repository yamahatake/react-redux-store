import { useEffect, useState } from "react"
import { ProductsServices } from "services/products/productsServices"
import { ProductGrid } from "components/productGrid"
import { ProductType } from 'types/products'

export const Home = () => {
  const [allProducts, setAllProduts] = useState<ProductType[]>([])

  useEffect(() => {
    ProductsServices.getAllProducts().then(res => {
      setAllProduts(res)
    })
  }, [])

  return (
    <section className="max-w-screen-xl w-full mt-8">
      <h1>Home</h1>

      { allProducts && <ProductGrid productList={allProducts} /> }
    </section>
  )
}