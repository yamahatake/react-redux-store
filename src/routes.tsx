import { Route, Routes } from 'react-router-dom'
import App from './App'

// PAGES
import { Home } from 'pages/home'
import { Page404 } from 'pages/page404'
import { Store } from 'pages/store'
import { Support } from 'pages/support'
import { About } from 'pages/about'
import { Product } from 'pages/product'

export const SetRoutes = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="store" element={<Store />} />
      <Route path='product/:productId/' element={<Product />} />
      <Route path="about" element={<About />} />
      <Route path="support" element={<Support />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  </Routes>
)
