function Item(props) {
  const { src, name, price, addToCart } = props
  return (
    <div className="item">
      <p className="item-name">{name}</p>
      <p className="item-img-container">
        <img src={src} alt={name} className="item-img" />
      </p>

      <p className="price">{price}</p>
      <button className="add-to-cart">Add to cart</button>
    </div>
  )
}
export default Item
