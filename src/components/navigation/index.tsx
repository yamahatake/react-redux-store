import type { FC } from 'react'
import { Link } from 'react-router-dom'

export type NavigationProps = {

}

export const Navigation: FC<NavigationProps> = () => (
  <div className='bg-cyan-500 shadow-md flex justify-center items-center h-16'>
    <nav className='max-w-screen-xl w-full flex justify-between'>
      <ul className='flex text-white gap-5 text-2xl'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>
    </nav>
  </div>
)
