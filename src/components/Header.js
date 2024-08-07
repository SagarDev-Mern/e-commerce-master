import React from 'react'
import image from '../android-chrome-512x512.png'
import '../App.css'
import { useSelector } from 'react-redux'

const Header = () => {

    const count = useSelector(state=>state.cartData)
    console.log("count ===", count)
  return (
    <div>
      <div className='headers'>
            <img className='img' src={image} alt='' />
            <span className='span'>{count.length}</span>
      </div>
    </div>
  )
}

export default Header
