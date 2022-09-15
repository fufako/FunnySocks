import cartImg from "../images/cart.png"
function EmptyCart() {
  return (
    <div className="empty">
      {" "}
      <p>Your cart is empty</p>
      <img src={cartImg} alt="shopping-cart" className="cart-img-empty" />
    </div>
  )
}
export default EmptyCart
