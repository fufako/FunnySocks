import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import EmptyCart from "./EmptyCart"
import React, { useState, useEffect } from "react"
function Cart(props) {
  const { items } = props

  const [total, setTotal] = useState()

  const countTotal = () => {
    const total = items.reduce(
      (prev, next) => prev + parseFloat(next.price.substring(1)),
      0
    )
    setTotal(total)
  }
  useEffect(() => {
    countTotal()
    console.log(total)
  }, items)

  return (
    <div className="main-cart-container">
      <div className="cart">
        <h3 className="cart-title">YOUR SHOPPING CART</h3>
        {items.length > 0 ? (
          <>
            {items.map((item) => (
              <CartItem item={item} key={item.key} />
            ))}
            <div className="total">Total: {total}$</div>
          </>
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
