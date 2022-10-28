import React from 'react'
import { Outlet} from "react-router-dom"
import { Navigation } from 'components/navigation'
import { Footer } from 'components/footer'

//STYLES
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <main className='flex justify-center pr-3 pl-3 min-h-[82vh]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App;
