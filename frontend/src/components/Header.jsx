import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../redux/authAction'
// import jwt_decode from 'jwt-decode'
import { FaCartPlus } from "react-icons/fa6";

const Header = () => {

  const loginData = useSelector ((state) => state.authData)  
  console.log(loginData)  
  // const loginDataWithToken = loginData
  // const token = loginData[0].token
  // const decodedToken = decode(token);
  // console.log(jwt_decode(loginData[0].token))
  // console.log(`the loginData is ${loginData}`)
  // console.log(`the login info is ${loginDataWithToken}`)
  // console.log(`the login token is ${token}`)
  // console.log(`the decoded token data is ${decodedToken}`)

  
  const result = useSelector ((state) => state.cartData)

  console.warn("redux data in header", result)

  const dispatch = useDispatch()

  return (
    <div className='flex justify-between items-center py-4'>
      <div>
        <NavLink
          to="/"
        >
          My E-Commerce App
        </NavLink> 
      </div>
      <div className=''>
      <NavLink
          to="/cart"
        >
          <div className='flex items-center'>
            <FaCartPlus style={{ color: 'white', fontSize: '1.5em' }}/> 
            <span>
              &nbsp; {result.length}
            </span>
          </div>
          
      </NavLink>         

        {loginData.length > 0 ? (

            <div>
              <p>Welcome {loginData[0].username}</p>
              <button 
                className='bg-green-400 p-2 mr-2 rounded-md'
                onClick={()=>dispatch(logout(loginData))}
              >
                Logout  
              </button>
            </div>
            
        ) : (
            <div>
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
        )}

                
      </div>
    </div>    
  )
}

export default Header