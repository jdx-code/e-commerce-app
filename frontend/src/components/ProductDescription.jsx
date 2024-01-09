import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/cartAction'
import { useDispatch } from 'react-redux'

const ProductDescription = () => {

  const dispatch = useDispatch()

  const { productID } = useParams()
  const [productDesc, setProductDesc] = useState([])

  useEffect(() => {

    const fetchProductDetails = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/products/${productID}`)
            setProductDesc(res.data)            
        } catch (err) {
            console.error(err)
        } 
    }

    fetchProductDetails();

  }, [productDesc])

  
  return (
    <div>
      
      {productDesc && productDesc.length > 0 ? (
        <div className='w-[100%] border-4 border-gray-800 md:px-20 md:flex md:justify-around md:items-center'>         
          <div className='w-[100%] px-4 sm:w-[50%]'>
            <img 
              src={productDesc[0].productImage} 
              alt={productDesc[0].productName} 
              className='w-[50%] h-[70%]'
            />
          </div> 
          <div className='w-[100%] px-4 sm:my-12 sm:w-[50%]'>            
            <p className='text-xl text-gray-600 py-2'>{productDesc[0].productName}</p>
            <p className='w-[80%] text-sm'>{productDesc[0].productDescription}</p>
            <p className='text-3xl text-gray-800 py-2'>Rs. {productDesc[0].productPrice}</p>
            <div className='flex text-sm text-gray-600 py-2'>              
              <div>
                <p>Features : </p>
                {productDesc[0].productFeatures.map(feature => (
                      <ul>
                        <li className='text-sm text-gray-800 py-2'>{feature}</li>
                      </ul>              
                    )
                )}
              </div>              
            </div>

            <div className='flex py-2 text-sm'>
              <p className='text-gray-600'>Colors : </p>
              <div className='px-6'>
                {productDesc[0].productColors.map(color => (
                      
                      <span>{color} &nbsp;</span>  
                      
                    )
                )}
              </div>              
            </div>

            <button
              className='bg-blue-500 p-2 my-2 border-4 border-blue-200 hover:bg-blue-400'
              onClick={() => dispatch(addToCart(productDesc))}
            >
              Add to cart
            </button>
            
          </div> 
                 
        </div>
      ) : (
        <p></p>
      )}      
    </div>
  )
}

export default ProductDescription