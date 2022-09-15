import { useRef } from "react"

function CartItem(props) {
  const { item, handleChange, handleDecrease, handleIncrease, handleRemove } =
    props
  const inputRef = useRef()
  const handleInputValue = (item) => {
    inputRef.current.value = item.amount
  }

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
                handleDecrease(item)
                handleInputValue(item)
              }}
            >
              -
            </button>
            <input
              min="1"
              type="number"
              defaultValue={item.amount}
              onChange={(e) => handleChange(e, item)}
              ref={inputRef}
            ></input>
            <button
              onClick={() => {
                handleIncrease(item)
                handleInputValue(item)
              }}
            >
              +
            </button>
          </div>
          <div
            className="remove"
            onClick={() => {
              handleRemove(item)
            }}
          >
            Remove item
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
