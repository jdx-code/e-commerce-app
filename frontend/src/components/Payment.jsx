import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { emptyCart } from '../redux/cartAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {

  const loginData = useSelector ((state) => state.authData) 

  const user_id = loginData[0].user_id

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    paymentType: '',    
  });

  const { totalAmount, itemsArray } = useSelector((state) => state.orderData);

  console.log(`Total Amount: ${totalAmount}`);
  console.log(`Items Array: ${itemsArray}`);
  
  const cart = itemsArray.map(item => ({ productId: item._id, quantity: item.quantity }));

  const dispatch = useDispatch()
  
  const handlePaymentTypeChange = (event) => {
    setFormData({
      ...formData,
      paymentType: event.target.value,      
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  const requestData = {
      formData,
      cart,           
      user_id 
    };

    axios
    .patch('http://localhost:5000/api/orders/payments', requestData)
    .then((response) => {
        if(response.status === 200) {
            console.log(`Payment successfull !! Order confirmed.`)
            toast.success("Order confirmed! Thank you for your purchase.", {
              position: toast.POSITION.TOP_RIGHT,
            });       
          dispatch(emptyCart()) 
          setTimeout(() => {
            navigate('/');    
          }, "2000"); 
        }
    })

  }

  return (
    <div>
        <p>Payment Options</p>
        
        <form onSubmit={handleSubmit}>
        <div className='p-2'>
          <input
            type='radio'
            name='paymentType'
            value='Cash on Delivery'
            checked={formData.paymentType === 'Cash on Delivery'}
            onChange={handlePaymentTypeChange}
          />{' '}
          Cash On Delivery
        </div>
        <div className='p-2'>
          <input
            type='radio'
            name='paymentType'
            value='Net Banking'
            checked={formData.paymentType === 'Net Banking'}
            onChange={handlePaymentTypeChange}
          />{' '}
          Net Banking
        </div>
        <div className='p-2'>
          <input
            type='radio'
            name='paymentType'
            value='UPI Payment'
            checked={formData.paymentType === 'UPI Payment'}
            onChange={handlePaymentTypeChange}
          />{' '}
          UPI Payment
        </div>
        <button className='bg-green-400 p-2 border-2 border-yellow-700' type='submit'>
          Complete payment
        </button>
      </form>

      <ToastContainer />

    </div>
    
  )
}

export default Payment