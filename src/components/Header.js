import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import Products from "./Products"
import Contact from "./Contact"
import Cart from "./Cart"
import cartImg from "../images/cart.png"

function Header(props) {
  const { items, addToCart, handleTotal, removeFromCart } = props
  return (
    <>
      <div className="header">
        <Link to="react-shopping-cart" className="home-main-title">
          <h1>
            {" "}
            <span className="orange">Funny </span> Socks Shop
          </h1>
        </Link>

        <div className="nav">
          <Link className="nav-link" to="react-shopping-cart">
            Home{" "}
          </Link>
          <Link className="nav-link" to="react-shopping-cart/products">
            Products{" "}
          </Link>
          <Link className="nav-link" to="react-shopping-cart/contact">
            Contact
          </Link>
          <Link className="nav-icon" to="react-shopping-cart/shopping-cart">
            <img src={cartImg} alt="shopping-cart" className="cart-img" />
            <div className="count">{items.length}</div>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/react-shopping-cart" element={<Home />} />
        <Route
          path="react-shopping-cart/products"
          element={<Products addToCart={addToCart} handleTotal={handleTotal} />}
        />
        <Route path="react-shopping-cart/contact" element={<Contact />} />
        <Route
          path="react-shopping-cart/shopping-cart"
          element={
            <Cart
              items={items}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </>
  )
}
export default Header
