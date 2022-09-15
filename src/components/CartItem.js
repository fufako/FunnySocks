function CartItem(props) {
  const { item } = props

  return (
    <div>
      <h5>{item.name}</h5>
    </div>
  )
}

export default CartItem
