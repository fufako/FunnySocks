import Header from "./components/Header"
import React, { useState, useEffect } from "react"
function App() {
  const [items, setItem] = useState([])

  const addToCart = (item) => {
    const nameToFind = item.name
    const exists = Boolean(items.find((item) => item.name === nameToFind))
    if (!exists) {
      console.log("I added")
      setItem((prevItems) => [...prevItems, item])
      item.amount += 1
    } else {
      item.amount += 1
    }
  }
  const removeFromCart = (item) => {
    const nameToRemove = item.name
    setItem(items.filter((item) => item.name !== nameToRemove))
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
