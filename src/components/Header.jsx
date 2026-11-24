import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <Link className="logo" to="/">MyShop</Link>
      <nav className="nav" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header
