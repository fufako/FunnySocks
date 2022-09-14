import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import Products from "./Products"
import Contact from "./Contact"
import Cart from "./Cart"
import cartImg from "../images/cart.png"

function Header() {
  return (
    <>
      <div className="header">
        <h1>
          {" "}
          <span className="orange">Funny </span> Socks Shop
        </h1>
        <div className="nav">
          <Link className="nav-link" to="/">
            Home{" "}
          </Link>
          <Link className="nav-link" to="/products">
            Products{" "}
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          <Link className="nav-icon" to="/shopping-cart">
            <img src={cartImg} alt="shopping-cart" className="cart-img" />
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopping-cart" element={<Cart />} />
      </Routes>
    </>
  )
}
export default Header
