import React from 'react';
import { useSelector } from 'react-redux';

function ShowUserInfo() {
    const { name, email, phoneNo, designation, address, cnic } = useSelector(state => state.userReducer.userData)
    return (
        <div className='flex flex-col justify-center items-center py-11'>
            <p className='text-3xl font-semibold'>Order Summary</p>
            <div className='mt-10 space-y-4 bg-white shadow-2xl px-8 py-6'>
                <div>
                    <p className='font-semibold'>Name</p>
                    <p>{name}</p>
                    <hr />
                </div>

                <div>
                    <p className='font-semibold'>CNIC</p>
                    <p>{cnic}</p>
                    <hr />
                </div>

                <div>
                    <p className='font-semibold'>Address</p>
                    <p>{address}</p>
                    <hr />
                </div>

                <div>
                    <p className='font-semibold'>P.No</p>
                    <p>{phoneNo}</p>
                    <hr />
                </div>

                <div>
                    <p className='font-semibold'>Designation</p>
                    <p>{designation}</p>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default ShowUserInfo;