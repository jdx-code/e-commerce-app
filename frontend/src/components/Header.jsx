import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <div>TuteDude E-Commerce App</div>
      <div className=''>
        <button className='bg-orange-300 p-2 mr-2 rounded-md'>
          Cart
          <span>
            (0)
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