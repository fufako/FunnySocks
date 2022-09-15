import Header from "./components/Header"
import React, { useState } from "react"
function App() {
  const [items, setItem] = useState([])

  const addToCart = (item) => {
    setItem((prevItems) => [...prevItems, item])
  }
  return (
    <div className="main">
      <Header items={items} addToCart={addToCart}></Header>
    </div>
  )
}

export default App
