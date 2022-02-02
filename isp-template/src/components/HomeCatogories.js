import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
function HomeCatogories() {

    return (

        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                    <h2 className="text-2xl font-extrabold text-gray-900">Categories</h2>
                    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                        <div className="group relative">
                            <Link to='/product'>
                                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img src="https://media.istockphoto.com/photos/set-of-contemporary-house-appliances-isolated-on-white-picture-id1174598609?k=20&m=1174598609&s=612x612&w=0&h=c5rP2tqv0Uck6zm21hBYhEyVy9EBAA7C5VGI4sgfmzo=" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover" />
                                </div>

                                <h3 className="mt-5 text-base font-semibold text-gray-900">
                                    <a href="#">
                                        <span className="absolute inset-0" />
                                        Electronics
                                    </a>
                                </h3>
                            </Link>
                        </div>
                        <div className="group relative">
                            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c29mYXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="w-full h-full object-center object-cover" />
                            </div>
                            <h3 className="mt-5 text-base font-semibold text-gray-900">
                                <a href="#">
                                    <span className="absolute inset-0" />
                                    Furniture
                                </a>
                            </h3>
                        </div>
                        <div className="group relative">
                            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="https://miro.medium.com/max/7046/0*QcS6P4c37yIn6LRG" alt="Collection of four insulated travel bottles on wooden shelf." className="w-full h-full object-center object-cover" />
                            </div>
                            <h3 className="mt-5 text-base font-semibold text-gray-900">
                                <a href="#">
                                    <span className="absolute inset-0" />
                                    Crockery
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default HomeCatogories;