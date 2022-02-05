import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function CheckoutProduct() {
    const cart = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();

    return (

        <div className="bg-white">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                </div>
            </div>
            <div className="my-8">
                <div className="container mx-auto px-6">
                    <h3 className="text-gray-700 text-2xl font-medium">Checkout</h3>
                    <div className="flex flex-col lg:flex-row mt-8">
                        <div className="w-full lg:w-1/2 order-2">
                            <form className="mt-8 lg:w-3/4">
                                <div className="mt-8">
                                    <div className="mt-6 flex space-x-4">
                                        <input className='border rounded py-1 px-4' type='text' placeholder='name' />
                                        <input className='border rounded py-1 px-4' type='text' placeholder='Designation' />
                                    </div>
                                    <div className="mt-6 flex space-x-4">
                                        <input className='border rounded py-1 px-4' type='text' placeholder='P.no' />
                                        <input className='border rounded py-1 px-4' type='text' placeholder='name' />
                                    </div>
                                    <div className="mt-6 flex space-x-4">
                                        <input className='border rounded py-1 px-4' type='text' placeholder='name' />
                                        <input className='border rounded py-1 px-4' type='text' placeholder='name' />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-8">
                                    <button className="flex items-center text-gray-700 text-sm font-medium rounded hover:underline focus:outline-none">
                                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                                        <span className="mx-2">Back step</span>
                                    </button>
                                    <Link to='/userinfo'>
                                        <button className="flex items-center px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                            <span>Checkout</span>
                                            <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </button>
                                    </Link>

                                </div>
                            </form>
                        </div>
                        <div className="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2">
                            <div className="flex justify-center lg:justify-end">
                                <div className="border rounded-md max-w-md w-full px-4 py-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-gray-700 font-medium">Order total {cart.totalCount}</h3>
                                    </div>
                                    {
                                        cart.items.length > 0 && cart.items.map((item) => {
                                            return (
                                                <div className="flex justify-between mt-6">
                                                    <div className="flex">
                                                        <img className="h-20 w-20 object-cover rounded" src={item.image} alt />
                                                        <div className="mx-3">
                                                            <h3 className="text-sm text-gray-600">{item.name}</h3>
                                                            <div className="flex items-center mt-2">
                                                                <button className="text-white rounded px-5 py-1 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:text-gray-600">
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CheckoutProduct;