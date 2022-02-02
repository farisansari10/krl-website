import React from 'react';

function ProductDetail() {
    return (

        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-2/5 w-full object-cover object-center rounded border border-gray-200" src="https://www.pngmart.com/files/21/Fridge-PNG-Photo.png" />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 space-y-8">
                        <p className='text-blue-600 font-semibold text-lg'>Brand Name:<span className='text-black font-normal text-base'> Samsung</span></p>
                        <p className="leading-relaxed font-semibold text-blue-600 text-xl">Model:<span className='text-black font-normal text-base'> Samsung Side X Inverter</span></p>
                        <p className='text-blue-600 font-semibold text-lg'>Avalability: <span className='text-black font-normal text-base'>In Stock</span></p>
                        <p className='text-blue-600 font-semibold text-lg'>Warranty: <span className='text-black font-normal text-base'>Ten Years </span></p>
                        <div className="flex">
                            <button className="flex text-black border border-2 font-semibold py-2 px-6 focus:outline-none border-indigo-500 rounded">Add to Cart</button>
                            <button className="flex text-white font-semibold border-0 ml-3 py-2 px-6 focus:outline-none bg-indigo-500 hover:bg-indigo-600 rounded">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProductDetail;