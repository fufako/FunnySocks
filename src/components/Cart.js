import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import EmptyCart from "./EmptyCart"
function Cart(props) {
  const { items } = props
  const emptyInfo = document.querySelector(".empty")
  return (
    <div className="main-cart-container">
      <div className="cart">
        <h3 className="cart-title">YOUR SHOPPING CART</h3>
        {items ? (
          items.map((item) => <CartItem item={item} key={item.key} />)
        ) : (
          <EmptyCart></EmptyCart>
        )}
        <div className="empty"></div>
        <button className="payment">Proceed to payment</button>
        <Link to="/products" className="back-to-shop">
          Back to shop
        </Link>
      </div>
    </div>
  )
}
export default Cart
