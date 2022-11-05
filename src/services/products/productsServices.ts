import { Api } from '../index'
import { errorHandler } from '../errorHandler';

const getAllProducts = async () => {
  try {
    const { data } = await Api().get('/products')
    return data
  } catch (err: any) {
    return new errorHandler(err.message || 'getAllProducts api error')
  }
}

export const ProductsServices = {
  getAllProducts
}