import React from 'react'
import { Link } from 'react-router-dom'
import pizza from '../assets/pizza.jpg'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'  style={{backgroundImage: `url(${pizza})`}}>
      <div className='headerContainer'>
        <h1>Slice of Heaven</h1>
        <p>A pizza straight out of Heaven</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>

      </div>
    </div>
  )
}

export default Home
