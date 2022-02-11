import React from 'react';

function AdminAddProduct() {
    return (
        <div className='flex flex-col justify-center items-center py-12'>
            <p className='text-4xl font-bold mb-8'>Add Products</p>
            <div className="bg-gray-100 h-96 px-6 w-full max-w-xs">
                <form className='py-4 grid grid-cols-2 gap-2'>
                    <input className='border px-3 py-1.5  rounded' type='text' placeholder='name' />
                    <input className='border px-3 py-1.5  rounded' type='description' placeholder='description' />
                    <input className='border px-3 py-1.5  rounded' type='category' placeholder='category' />
                    <input className='border px-3 py-1.5  rounded' type='subCategory' placeholder='subCategory' />
                    <input className='border px-3 py-1.5  rounded' type='product' placeholder='product' />
                </form>
                <button className='text-white bg-indigo-500 hover:bg-indigo-800 py-2 px-4 w-full rounded-md' >Add</button>
            </div>
        </div>

    )
}

export default AdminAddProduct;
