import Header from './components/Header'
import Main from './components/Main'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import ProductDescription from './components/ProductDescription'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Cart from './components/Cart'

function App() {   

  return (
    <>
      <div className='bg-yellow-400'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />          

          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/cart" element={<Cart />} />
          
          <Route path="/products/all" element={<Main />} />
          <Route path="/products/:productID" element={<ProductDescription />} />
        </Routes>
      </div>
    </>
  )
}

export default App
