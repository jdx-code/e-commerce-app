import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const ProductCard = (props) => {    

    return (                                                  
        <>   
            <div className="container">
                <div className="row">
                    <div className='flex flex-col px-[77px] sm:px-[25px] py-[60px] sm:flex-row sm:justify-center items-center'>

                        {props.products.map((item) => (               
                            
                                <div key={item._id} className="p-[10px] m-4 w-[75%] sm:w-[45%] md:w-[38%] lg:w-[30%] xl:w-[24%] bg-[#fff] shadow-2xl rounded-md hover:p-2 hover:border-2 hover:border-[#14a800]">
                                    <Link to={`/products/${item._id}`} className='hover:text-[#227418]'>
                                        <img src={item.productImage} className="w-full h-64"
                                            alt="e-magazine" />
                                        <div className="text-center py-6">
                                            <h5 className="">{item.productName}</h5>
                                            <p className="">{item.productDescription}</p>
                                            <p className="">{item.productPrice}</p>
                                        </div>
                                    </Link>
                                </div>                                                         
                            
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </>      
    )
}

export default ProductCard