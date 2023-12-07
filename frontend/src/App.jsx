import Header from './components/Header'
import Main from './components/Main'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import ProductDescription from './components/ProductDescription'

function App() {  

  return (
    <>
      <div className='bg-yellow-400'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/all" element={<Main />} />
          <Route path="/products/:productID" element={<ProductDescription />} />
        </Routes>
      </div>
    </>
  )
}

export default App
