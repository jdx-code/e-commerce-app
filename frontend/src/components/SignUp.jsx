import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useAuthContext } from '../context/Auth/AuthProvider';

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

    // const { login } = useAuthContext(); // Get the login function from the auth context

    const handleSubmit = (event) => {
        event.preventDefault();
    
        axios
          .post('http://localhost:5000/api/users/register-customer', formData)
          .then((response) => {
            if (response && response.data) {
              // Call the register function to set user data and token         
              
              // login(response.data.token);
              console.log('Registered successfully..')
    
              axios
                .get('http://localhost:5000/api/users/customer-protected', {
                  headers: {
                    Authorization: response.data.token, // Include the token from the auth context
                  },
                })
                .then((res) => {
                  // Check if the response indicates success (e.g., res.status === 200)
                  if (res.status === 200) {
                    // Navigate to the server-side route if successful
                    navigate('/customer-protected');
                    // toast('Teacher logged in successfully!', {
                    //   position: toast.POSITION.TOP_CENTER,
                    // });
                  } else {
                    // Handle other cases or errors as needed
                    console.error('Server response indicates an error:', res);
                  }
                })
                .catch((error) => {
                  // Handle any errors from the GET request
                  console.error('Error fetching data:', error);
                });
    
              // Clear form inputs on successful submission
              setFormData({
                username: '',
                password: '',
              });
            } else {
              // Handle unexpected response format
              console.error(`Unexpected response format: ${response}`);
            //   toast.error('An unexpected error occurred.', {
            //     position: toast.POSITION.TOP_CENTER,
            //   });
            }
          })
          .catch((error) => {
            if (error && error.response && error.response.data && error.response.data.message) {
              console.error(`Error: ${error.response.data.message}`);
              // Display the error message from the server
            //   toast.error(error.response.data.message, {
            //     position: toast.POSITION.TOP_CENTER,
            //   });
            } else {
              // Handle unexpected error format
              console.error(`Unexpected error format: ${error}`);
            //   toast.error('An unexpected error occurred.', {
            //     position: toast.POSITION.TOP_CENTER,
            //   });
            }
          });
      };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="postTitle">Name:</label>
            <input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={handleChange}
                name="name"
                value={formData.name}
            />
            </div>
            <div className="form-group">
            <label htmlFor="postTitle">Email:</label>
            <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            </div>
            <div className="form-group">
            <label htmlFor="postTitle">Username:</label>
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                onChange={handleChange}
                name="username"
                value={formData.username}
            />
            </div>
            <div className="form-group">
            <label htmlFor="postTitle">Password:</label>
            <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={formData.password}
            />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>    
  )
}

export default SignUp