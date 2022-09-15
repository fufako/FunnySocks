function CartItem(props) {
  const { item, handleChange, handleDecrease, handleIncrease } = props

  return (
    <div className="items-container">
      <div className="item-container">
        <img src={item.src} alt={item.name} className="item-cart-img" />
        <div className="item-info">
          <h5 className="item-cart-name">{item.name}</h5>
          <p className="cart-price">{item.price}</p>
          <div className="add-remove">
            <button
              onClick={() => {
                handleIncrease(item)
              }}
            >
              +
            </button>
            <input
              min="1"
              type="number"
              defaultValue={item.amount}
              onChange={(e) => handleChange(e, item)}
            ></input>
            <button
              onClick={() => {
                handleDecrease(item)
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
