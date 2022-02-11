import React from 'react';

function AdminUsers() {
    return (
        <div className="py-12 mx-auto container">
            <p className="text-3xl font-bold">Admin Panel</p>
            <div className="flex flex-col justify-center items-center">
                <p className="text-3xl text-gray-800 font-bold">Customers</p>
                <div>
                    <div className="rounded-t-xl overflow-hidden p-10">
                        <table className="table-auto">
                            <thead className="bg-gray-300 border shadow-sm">
                                <tr>
                                    <th className="px-4 py-2">ID</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">P.No</th>
                                    <th className="px-4 py-2">Designation</th>
                                    <th className="px-4 py-2">Divison</th>
                                    <th className="px-4 py-2">Contact</th>
                                    <th className="px-4 py-2">Product</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">1</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">Faris</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">0-66</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">Officer</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">IT</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">03358054143</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium"><img className="h-20 w-20" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="img" /></td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">2</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">Adil</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">0-88</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">Auditer</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">Accounts</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">03349817001</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium"><img className="h-20 w-20" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="img" /></td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">3</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">Intro to JavaScript</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">Chris</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">1,280</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">858</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">858</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium"><img className="h-20 w-20" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="img" /></td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">4</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">Intro to JavaScript</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">Chris</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">1,280</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">858</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium">858</td>
                                    <td className="border border-gray-500 px-4 py-2 font-medium"><img className="h-20 w-20" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="img" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default AdminUsers;
