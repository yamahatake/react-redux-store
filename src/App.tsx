import React from 'react'
import { Outlet} from "react-router-dom"
import { Navigation } from 'components/navigation'

//STYLES
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <Navigation/>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}

export default App;
