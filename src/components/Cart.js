import { Link } from "react-router-dom"
function Cart() {
  return (
    <div className="main-cart-container">
      <div className="cart">
        <h3 className="cart-title">YOUR SHOPPING CART</h3>

        <button className="payment">Proceed to payment</button>
        <Link to="/products" className="back-to-shop">
          Back to shop
        </Link>
      </div>
    </div>
  )
}
export default Cart
