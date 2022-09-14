function Item(props) {
  const { src, name, price, addToCart } = props
  return (
    <div className="item">
      <p className="item-name">{name}</p>
      <img src={src} alt={name} className="item-img" />
      <p className="price">{price}</p>
      <button>Add to cart</button>
    </div>
  )
}
export default Item
