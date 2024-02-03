import React from 'react'
import   "./HomePage.css"
import {Link } from 'react-router-dom'
import logo from '../images/try.png'
const HomePage = () => {
  return (
    <div className='home'>
<div className='home-img-container '>
<img  className='logo-img' src={logo} alt="" />
  <Link to='/topic' className='a'>
    <div className='btn-group'>
    <button class="btn btn-masterful">
            <span class="icon">&#x1F680;</span>
            <span class="btn-txt">Testə başla!</span>
        </button>
    </div>
  </Link>
  </div>  
    </div>
  )
}

export default HomePage