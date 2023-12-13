import React from 'react'
import Main from './Main'
import { useSelector } from 'react-redux'

const Home = () => {

  const data = useSelector((state) => state.authData)
  console.log('Redux data in Home..', data)

  return (
    <div>
        <Main />
    </div>
  )
}

export default Home