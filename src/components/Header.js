import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
        <h1>Header</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="shop">Shop</NavLink>
        <NavLink to="about">About</NavLink>
    </div>
  )
}

export default Header