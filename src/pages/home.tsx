import { useEffect, useState } from "react"
import { errorHandler } from "services/errorHandler"
import { ProductsServices } from "services/products/productsServices"
import { ProductGrid } from "components/productGrid"

export const Home = () => {
  const [allProducts, setAllProduts] = useState()

  useEffect(() => {
    ProductsServices.getAllProducts().then(res => {
      if (res instanceof errorHandler) {
        return false
      } else {
        setAllProduts(res)
      }
    })
  }, [])

  return (
    <section className="max-w-screen-xl w-full mt-8">
      <h1>Home</h1>

      {ProductGrid(allProducts)}
    </section>
  )
}