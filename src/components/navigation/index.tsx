import type { FC } from 'react'
import { Link } from 'react-router-dom'

export type NavigationProps = {

}

export const Navigation: FC<NavigationProps> = () => (
  <div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/store">Store</Link></li>
      </ul>
    </nav>
  </div>
)

