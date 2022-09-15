function Item(props) {
  const { item, addToCart } = props
  return (
    <div className="item">
      <p className="item-name">{item.name}</p>
      <p className="item-img-container">
        <img src={item.src} alt={item.name} className="item-img" />
      </p>

      <p className="price">{item.price}</p>
      <button className="add-to-cart" onClick={addToCart.bind(this, item)}>
        Add to cart
      </button>
    </div>
  )
}
export default Item
