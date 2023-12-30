import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        role: 'customer',
    });

    const handleChange = (event) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name]: event.target.value,
        }));        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        axios
          .post('http://localhost:5000/api/users/register-customer', formData)
          .then((response) => {
            if (response && response.data) {
      
              console.log(`Registered successfully with.. ${response.data.token}`)

              navigate('/');    
              
              setFormData({
                name: '',
                email: '',
                username: '',
                password: '',
              });
            } else {              
              console.error(`Unexpected response format: ${response}`);
              toast.error('An unexpected error occurred.', {
                position: toast.POSITION.TOP_CENTER,
              });
            }
          })
          .catch((error) => {
            if (error && error.response && error.response.data && error.response.data.message) {
              console.error(`Error: ${error.response.data.message}`);              
              toast.error(error.response.data.message, {
                position: toast.POSITION.TOP_CENTER,
              });
            } else {              
              console.error(`Unexpected error format: ${error}`);
              toast.error('An unexpected error occurred.', {
                position: toast.POSITION.TOP_CENTER,
              });
            }
          });
      };

  return (
    <div>
        <form onSubmit={handleSubmit}>

        <div className="space-y-12">
        <div className="border-4 border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Customer Sign Up</h2>
          
          <div className="mt-10 max-w-[85%] sm:max-w-[50%] lg:max-w-[35%] mx-auto grid grid-cols-1 gap-x-6 gap-y-8 border-4 border-yellow-400 p-4">

          <div className="sm:col-span-4">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">                  
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="form-control text block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"                    
                    placeholder="Enter your name here.."
                    onChange={handleChange}                    
                    value={formData.name}
                  />
                </div>
              </div>
            </div>


            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">                  
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="form-control text block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"                    
                    placeholder="Enter your email here.."
                    onChange={handleChange}                    
                    value={formData.email}
                  />
                </div>
              </div>
            </div>


            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">                  
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="form-control text block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"                    
                    placeholder="Enter your username here.."
                    onChange={handleChange}                    
                    value={formData.username}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">                  
                  <input                
                    className="form-control block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    type="password"                    
                    placeholder="Enter your password here.."
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                  />
                </div>
              </div>
            </div> 

            <div className="mt-6 flex items-center gap-x-6 sm:col-span-4">              
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-100 px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm hover:bg-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>           
                       
        </div>

        </div>

        </div>
        </form>

    </div>    
  )
}

export default SignUp