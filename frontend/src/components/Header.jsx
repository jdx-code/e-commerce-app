import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const result = useSelector ((state) => state.cartData)
  console.warn("redux data in header", result)

  return (
    <div className='flex justify-between items-center'>
      <div>
        <NavLink
          to="/"
        >
          My E-Commerce App
        </NavLink> 
      </div>
      <div className=''>
        <button className='bg-orange-300 p-2 mr-2 rounded-md'>
          Cart
          <span>
            {result.length}
          </span>  
        </button>
        <NavLink
          to="/login"
        >
          <button className='bg-green-400 p-2 mr-2 rounded-md'>
            Login  
          </button>
        </NavLink>
        <NavLink
          to="/sign-up"
        >
          <button className='bg-green-300 p-2 rounded-md'>
            Sign-up
          </button>
        </NavLink>        
      </div>
    </div>    
  )
}

export default Header