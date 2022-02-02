import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
    return (

        <div className='py-12'>
            <p className='text-4xl font-semibold text-center'>Electronics</p>
            <div className="px-10 py-20 bg-white grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
                <div className="max-w-xs rounded-md overflow-hidden shadow-lg  cursor-pointer">
                    <div>
                        <img src="https://www.pngmart.com/files/21/Fridge-Transparent-Background.png" alt />
                    </div>
                    <div className="py-4 px-4 bg-white">
                        <Link to='/productlist'>
                            <span className="flex items-center justify-center mt-4 w-full bg-indigo-500 hover:bg-indigo-600  text-white py-1 rounded">
                                <button className="font-semibold text-gray-50">Fridge</button>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="max-w-xs rounded-md overflow-hidden shadow-lg  cursor-pointer">
                    <div>
                        <img src="https://www.pngmart.com/files/6/Washing-Machine-PNG-Free-Download.png" alt />
                    </div>
                    <div className="py-4 px-4 bg-white">
                        <span className="flex items-center justify-center mt-4 w-full bg-indigo-500 hover:bg-indigo-600   py-1 rounded">
                            <button className="font-semibold text-gray-50">Washing Machine</button>
                        </span>
                    </div>
                </div>
                <div className="max-w-xs rounded-md overflow-hidden shadow-lg  cursor-pointer">
                    <div>
                        <img src="https://www.pngmart.com/files/2/Microwave-Oven-PNG-Pic.png" alt />
                    </div>
                    <div className="py-4 px-4 bg-white">
                        <span className="flex items-center justify-center mt-20 w-full bg-indigo-500 hover:bg-indigo-600  py-1 rounded">
                            <button className="font-semibold text-gray-50">Microwave Oven</button>
                        </span>
                    </div>
                </div>
                <div className="max-w-xs rounded-md overflow-hidden shadow-lg  cursor-pointer">
                    <div>
                        <img src="https://files.fm/thumb_show.php?i=d8yrvauy3" alt />
                    </div>
                    <div className="py-4 px-4 bg-white">
                        <span className="flex items-center justify-center mt-4 w-full bg-indigo-500 hover:bg-indigo-600  py-1 rounded">
                            <button className="font-semibold text-gray-50">Iron</button>
                        </span>
                    </div>
                </div>
                <div className="max-w-xs rounded-md overflow-hidden shadow-lg  cursor-pointer">
                    <div>
                        <img src="https://www.anex.pk/wp-content/uploads/2022/01/Juicer-Blender-AG-189-Filled-380x434.jpg" alt />
                    </div>
                    <div className="py-4 px-4 bg-white">
                        <span className="flex items-center justify-center mt-4 w-full bg-indigo-500 hover:bg-indigo-600  py-1 rounded">
                            <button className="font-semibold text-gray-50">Juicer Set</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Products;