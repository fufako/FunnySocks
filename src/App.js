import Header from "./components/Header"
import React, { useState } from "react"
function App() {
  const [items, setItem] = useState([])

  const addToCart = (item) => {
    if (!items.includes(item)) {
      setItem((prevItems) => [...prevItems, item])
      item.amount += 1
    } else {
      item.amount += 1
    }
  }
  console.log(items)
  return (
    <div className="main">
      <Header items={items} addToCart={addToCart}></Header>
    </div>
  )
}

export default App
