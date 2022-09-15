import Header from "./components/Header"
import React, { useState } from "react"
function App() {
  const [items, setItem] = useState([])
  const addToCart = (item) => {
    const nameToFind = item.name
    const exists = Boolean(items.find((item) => item.name === nameToFind))
    if (!exists) {
      setItem((prevItems) => [...prevItems, item])
      item.amount += 1
    } else {
      item.amount += 1
    }
  }
  const removeFromCart = (item) => {
    const keyToRemove = item.key
    setItem(items.filter((item) => item.key !== keyToRemove))
  }

  return (
    <div className="main">
      <Header
        items={items}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      ></Header>
    </div>
  )
}

export default App
