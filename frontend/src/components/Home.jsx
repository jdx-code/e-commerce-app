import React from 'react'
import Main from './Main'
import { useSelector } from 'react-redux'

const Home = () => {

  const data = useSelector((state) => state.authData)
  
  return (
    <div>
        <Main />
    </div>
  )
}

export default Home