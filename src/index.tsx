import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from 'pages/home'
import { Page404 } from 'pages/page404'
import { Store } from 'pages/store'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
