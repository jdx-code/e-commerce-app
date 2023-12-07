import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

const Main = () => {

  const [loadingData, setLoadingData] = useState(true)
  const [products, setProducts] = useState([])


  useEffect(() => {
  
    async function fetchAllProducts() {
      try{
        const res = await axios.get(`http://localhost:5000/api/products/all`)
        setProducts(res.data)
        setLoadingData(false)
        console.log(products)
      } catch (err) {
        console.error(err)
      }
    }

    fetchAllProducts();
    
  }, [])


  

  return (    
    <div className='bg-red-500'>
      <ProductCard products={products}/>
    </div>
  )
}

export default Main