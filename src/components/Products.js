import Animal from "../images/Animal.png"
import Beer from "../images/Beer.png"
import Coder from "../images/Coder.png"
import Dollar from "../images/Dollar.png"
import Frosty from "../images/Frosty.png"
import Movie from "../images/Movie.png"
import Stories from "../images/Stories.png"
import Tiger from "../images/Tiger.png"
import Item from "./Item"
import React, { useState } from "react"

function Products(props) {
  const socks = [
    {
      src: Animal,
      name: "Cute brown panda socks",
      price: "$10.99",
      key: 1,
    },
    {
      src: Beer,
      name: "Socks for a Sunday, Cheers!",
      price: "$5.99",
      key: 2,
    },
    {
      src: Coder,
      name: "Web Developer socks",
      price: "$15.99",
      key: 3,
    },
    {
      src: Dollar,
      name: "Money, money, money",
      price: "$125.99",
      key: 4,
    },
    {
      src: Frosty,
      name: "Cute penguin ",
      price: "$5.99",
      key: 5,
    },
    {
      src: Movie,
      name: "Kinomaniak socks",
      price: "$7.99",
      key: 6,
    },
    {
      src: Stories,
      name: "Short socks",
      price: "$9.99",
      key: 7,
    },
    {
      src: Tiger,
      name: "Scary tiger socks",
      price: "$12.99",
      key: 8,
    },
  ]
  const { addToCart } = props
  const [products, setProducts] = useState(socks)
  return (
    <>
      <h2 className="sub-title">Products</h2>
      <div className="products-main-container">
        <div className="grid-container">
          {products.map((product) => (
            <Item item={product} key={product.key} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </>
  )
}
export default Products
