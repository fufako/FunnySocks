import React, { useState, useEffect } from "react"
function CartItem(props) {
  const { item, handleChange } = props

  console.log(item)

  return (
    <div className="items-container">
      <div className="item-container">
        <img src={item.src} alt={item.name} className="item-cart-img" />
        <div className="item-info">
          <h5 className="item-cart-name">{item.name}</h5>
          <p className="cart-price">{item.price}</p>
          <div className="add-remove">
            <button>+</button>
            <input
              type="number"
              defaultValue={item.amount}
              onChange={(e) => handleChange(e, item)}
            ></input>
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
