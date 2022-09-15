import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import EmptyCart from "./EmptyCart"
import React, { useState, useEffect } from "react"
function Cart(props) {
  const { items, removeFromCart } = props

  const [total, setTotal] = useState()
  const handleRemove = (item) => {
    console.log("Before removeFormCart: " + total)
    removeFromCart(item)
    console.log("Items: " + items)
    countTotal()
    console.log("After removeFormCart: " + total)
  }

  const handleChange = (e, item) => {
    item.amount = parseInt(e.target.value)
    countTotal()
  }
  const handleDecrease = (item) => {
    if (item.amount === 1) return
    item.amount -= 1
    countTotal()
  }
  const handleIncrease = (item) => {
    item.amount += 1
    countTotal()
  }
  const countTotal = () => {
    const total = items.reduce(
      (prev, next) => prev + parseFloat(next.price.substring(1)) * next.amount,
      0
    )
    setTotal(total)
  }
  useEffect(() => {
    countTotal()
  }, [])
  return (
    <div className="main-cart-container">
      <div className="cart">
        <h3 className="cart-title">YOUR SHOPPING CART</h3>
        {items.length > 0 ? (
          <>
            {items.map((item) => (
              <CartItem
                item={item}
                key={item.key}
                handleChange={handleChange}
                handleDecrease={handleDecrease}
                handleIncrease={handleIncrease}
                handleRemove={handleRemove}
              />
            ))}
            <div className="total">Total: {Math.round(total * 100) / 100}$</div>
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
