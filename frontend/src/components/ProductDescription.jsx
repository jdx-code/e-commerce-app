import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDescription = () => {
  
  const { productID } = useParams()
  const [productDesc, setProductDesc] = useState([])

  useEffect(() => {

    const fetchProductDetails = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/products/${productID}`)
            setProductDesc(res.data)
            console.log(res.data)                
        } catch (err) {
            console.error(err)
        } 

    }

    fetchProductDetails();

  }, [])
  
 
  return (
    <div>

        
    </div>
  )
}

export default ProductDescription