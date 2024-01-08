import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { increaseQty, decreaseQty, removeAllQty } from '../redux/cartAction';
import { proceedToPayment } from '../redux/orderAction';

const Cart = () => {

  const results = useSelector((state) => state.cartData);

  const loginData = useSelector ((state) => state.authData) 

  // Flatten the nested arrays
  const flattenedResults = results.flat();

  // Create an object to store unique items with quantities
  const uniqueItems = flattenedResults.reduce((acc, item) => {
    if (acc[item._id]) {
      // If the item is already in the object, increase its quantity
      acc[item._id].quantity += 1;
    } else {
      // If the item is not in the object, add it with quantity 1
      acc[item._id] = { ...item, quantity: 1 };
    }
    return acc;
  }, {});

  // Convert the object back to an array
  const uniqueItemsArray = Object.values(uniqueItems);

  // Calculate the total amount
  const totalAmount = uniqueItemsArray.reduce((total, result) => {
    return total + result.productPrice * result.quantity;
  }, 0);

  const dispatch = useDispatch()

  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {uniqueItemsArray.map((result) => (
          <li key={result._id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={result.productImage}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{result.productName}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{result.productPrice}</p>
                <div className='flex'>
                  <p className="mt-1 text-xs leading-5 text-gray-500">Quantity: {result.quantity}</p>
                  <div>                   
                    
                    <button 
                      className="ml-[0.85rem] bg-blue-400 hover:bg-blue-500 text-white font-bold py-[0.05rem] px-2 rounded-full text-sm"                      
                      onClick={() => dispatch(increaseQty(result._id))}
                    >  
                      +  
                    </button>
                    <button 
                      className="mx-[0.25rem] bg-red-400 hover:bg-pink-700 text-white font-bold py-[0.12rem] px-[0.60rem] rounded-full text-sm"
                      onClick={() => dispatch(decreaseQty(result._id))}
                    >  
                      -
                    </button>

                    <button 
                      className="mx-[0.25rem] bg-red-300 hover:bg-pink-700 text-white font-bold py-[0.12rem] px-[0.60rem] rounded-full text-sm"
                      onClick={() => dispatch(removeAllQty(result._id))}
                    >  
                      Remove Item
                    </button>

                  </div>                  
                </div>
                
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{result.productPrice * result.quantity}</p>
            </div>
          </li>
        ))}
      </ul>      

      <div className="flex justify-end py-5">
        <p className="text-lg font-semibold">Total Amount: {totalAmount}</p>
      </div>  
      
      <NavLink 
        to = {loginData.length > 0 ? "/payment" : "/login"}
      >
        <button 
          className='bg-green-400 p-2 rounded-md border-2 border-green-700'
          onClick={()=>dispatch(proceedToPayment(totalAmount, uniqueItemsArray))}          
        >
          Proceed to payment
        </button>
      </NavLink> 

    </div>    

  );
};

export default Cart;
