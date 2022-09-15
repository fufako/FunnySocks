function CartItem(props) {
  const { item } = props

  return (
    <div className="items-container">
      <div className="item-container">
        <img src={item.src} alt={item.name} className="item-cart-img" />
        <div className="item-info">
          <h5 className="item-cart-name">{item.name}</h5>
          <p className="cart-price">{item.price}</p>
          <div className="add-remove">
            <button>+</button>
            <input type="number" value={item.amount}></input>
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
