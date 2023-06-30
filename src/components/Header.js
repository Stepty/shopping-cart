import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
        <h1>Shop-A-Lot</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="shop">Shop</NavLink>
        <NavLink to="about">About</NavLink>
    </div>
  )
}
