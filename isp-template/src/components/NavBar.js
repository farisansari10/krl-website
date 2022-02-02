import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'


function NavBar() {
    const cart = useSelector((state) => state);
    const dispatch = useDispatch();

    return (

        <nav className="bg-white border-gray-800 w-full px-2 sm:px-4 py-4 rounded drop-shadow-md sticky top-0 z-50">
            <div className="container flex justify-between items-center mx-auto">
                <Link to="/">
                    <h1 className="text-xl font-semibold ">KRL Foundation</h1>
                </Link>
                <div className="">
                    <ul className="flex items-center md:flex-row space-x-3 md:space-x-2 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <button className="text-gray-900 hover:text-gray-600 hover:underline font-medium text-md">Cart</button>
                        </li>
                        <Link to='/checkout'>
                            <button>
                                <FontAwesomeIcon icon={faShoppingCart} className='text-gray-700 text-lg cursor-pointer' />
                                <span className='text-lg ml-2'>{cart.length}</span>
                            </button>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default NavBar;