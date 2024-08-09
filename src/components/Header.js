import React from 'react'
import image from '../android-chrome-512x512.png'
import '../App.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

  const count = useSelector(state => state.cartData)
  console.log("count ===", count)
  return (
    <div>
      <div className='headers'>
      <h2 className='logo'><Link to="/">E-comm</Link></h2>
      <Link className='headers' to="/cart">
        <img className='img' src={image} alt='' />
        <span className='span'>{count.length}</span>
        </Link>
      </div>
    </div>
  )
}

export default Header
