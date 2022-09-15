import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import EmptyCart from "./EmptyCart"
import React, { useEffect } from "react"
function Cart(props) {
  const { items } = props
  return (
    <div className="main-cart-container">
      <div className="cart">
        <h3 className="cart-title">YOUR SHOPPING CART</h3>
        {items.length >= 1 ? (
          items.map((item) => <CartItem item={item} key={item.key} />)
        ) : (
          <EmptyCart />
        )}

        <button className="payment">Proceed to payment</button>
        <Link to="/products" className="back-to-shop">
          Back to shop
        </Link>
      </div>
    </div>
  )
}
export default Cart
