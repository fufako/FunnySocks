import { Link } from "react-router-dom"
import React, { useEffect } from "react"
function Home() {
  useEffect(() => {}, [])
  return (
    <div className="home-container">
      <div className="home-text-container">
        <p className="home-top">We all need socks, why don't make them fun?</p>
        <p className="home-middle">
          The best <br />
          <span className="orange">The cheapest</span> <br /> The most fun
        </p>
        <p className="home-bottom">Funny Stocks Shop</p>
        <Link className="shop-now" to="/products">
          Shop now
        </Link>
      </div>
    </div>
  )
}
export default Home
