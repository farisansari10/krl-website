import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { subCategories } from './Data';

function Products() {
    const { category } = useParams();

    return (
        <div className='py-12'>
            <p className='text-4xl font-semibold text-center'>{category}</p>
            <div className="px-10 py-20 bg-white grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
                {category && subCategories[category].map((item, index) => (
                    <div key={index} className="max-w-xs rounded-md overflow-hidden shadow-lg  cursor-pointer">
                        <div>
                            <img src={item.imgUrl} alt />
                        </div>
                        <div className="py-4 px-4 bg-white">
                            <Link to={`/productlist/${item.name}`}>
                                <span className="flex items-center justify-center mt-4 w-full bg-indigo-500 hover:bg-indigo-600  text-white py-1 rounded">
                                    <button className="font-semibold text-gray-50">{item.name}</button>
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Products;