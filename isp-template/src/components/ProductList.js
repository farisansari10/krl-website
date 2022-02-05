import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { Data } from "./Data";
import { getProductBySubCategoryAction } from '../redux/actions/productActions';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductList() {
    const { subCategory } = useParams();
    // const cart = useSelector((state) => state.Reducer);
    // const { products, isLoading, errorMsg } = useSelector(state => state.productsReducer);
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    console.log(subCategory)
    // console.log(cart);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(true);
        // dispatch(getProductBySubCategoryAction(subCategory));
        const getProducts = async () => {
            const res = await axios.get(`http://localhost:4000/products/all/${subCategory}`);
            console.log(res);
            setProducts([...res.data.data]);
            setIsLoading(false);
        }
        getProducts();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }
    // if (!products && errorMsg) {
    //     return <div>{errorMsg}</div>
    // }

    return (
        <div className='py-12'>
            <p className='text-4xl font-semibold text-center'>REFRIGERATOR</p>
            <div className="px-10 py-20 bg-white grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
                {
                    products.length > 0 && products.map((item) => {
                        item.quantity = 1;
                        return (
                            <div key={item.id} className="max-w-xs rounded-md overflow-hidden shadow-lg cursor-pointer">
                                <div>
                                    <img src={`http://localhost:4000/static/images/${item.imgUrl}`} alt />
                                </div>
                                <div className="py-4 px-4 bg-white">
                                    <h3 className="text-md font-semibold text-gray-900">{item.name}</h3>
                                    {/* <p className="mt-4 text-lg font-medium ml-7 text-gray-900">{item.price}</p> */}
                                    <span className="flex items-center justify-center mt-4 py-1 rounded">
                                        <Link to='/fridges'>
                                            <button className="font-semibold text-gray-900 border border-indigo-500 py-2 px-2 rounded">View Details</button>
                                        </Link>
                                        <button onClick={() => dispatch({ type: "ADD", payload: item })} className="font-semibold text-white focus:outline ml-3 bg-indigo-500 hover:bg-indigo-600 py-2 px-2 rounded">Add to Cart</button>
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default ProductList;