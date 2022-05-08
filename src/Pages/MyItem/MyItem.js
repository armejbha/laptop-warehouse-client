import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
// import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [inventorys, setInventorys] = useState([]);
    useEffect(() => {
        const email = user?.email;
        const url = `http://localhost:5000/myitems?email=${email}`;
        //     try {
        //         fetch(url, {
        //             method: 'GET',
        //             headers: {
        //                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //             }
        //         })
        //             .then(res => res.json())
        //             .then(data => setInventorys(data))
        //     }
        //     catch (error) {
        //         console.log(error.massage)
        //         if (error.response.status === 401 || error.response.status === 403) {
        //             signOut(auth);
        //             navigate('/login')
        //         }
        //     }

        // }, [user])

        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setInventorys(data))
    }, [user])

    const handleDelete = id => {
        const process = window.confirm('Are you want to delete it');
        if (process) {
            const url = `http://localhost:5000/items/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingItem = inventorys.filter(item => item._id !== id);
                    setInventorys(remainingItem);
                })
        }
    }

    const navigateToAddItem = () => {
        navigate('/additem')
    }

    return (
        <div className='mb-24 mx-12'>
            <h2 className='text-center my-4 text-2xl font-bold'>My Items</h2>
            <button onClick={navigateToAddItem} className='bg-red-400 my-4 block mx-auto px-6 py-2 rounded-md text-xl font-bold'>Add Item</button>
            <table className='border border-slate-500 w-full'>
                <thead>
                    <tr className=''>
                        <th className='border-2 border-black'>Id</th>
                        <th className='border-2 border-black'>Picture</th>
                        <th className='border-2 border-black'>Name</th>
                        <th className='border-2 border-black'>Supplier Name</th>
                        <th className='border-2 border-black'>Description</th>
                        <th className='border-2 border-black'>Price</th>
                        <th className='border-2 border-black p-6'>Quantity</th>
                        <th className='border-2 border-black'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventorys?.map(item =>
                            <tr className=''>
                                <td className='border-2 border-black p-4'>{item._id}</td>
                                <td className='border-2 border-black p-4 w-1/12'><img className='' src={item.img} alt="" /></td>
                                <td className='border-2 border-black p-4'>{item.name}</td>
                                <td className='border-2 border-black p-4'>{item.supplierName}</td>
                                <td className='border-2 border-black p-4'>{item.description}</td>
                                <td className='border-2 border-black p-4'>{item.price}</td>
                                <td className='border-2 border-black p-4 text-center'>{item.quantity}</td>
                                <td className='border-2 border-black p-4'>
                                    <button onClick={() => handleDelete(item._id)} className='bg-red-400 px-4 py-1 rounded-md text-white'>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div >
    );
};

export default MyItem;