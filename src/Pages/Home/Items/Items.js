import React from 'react';
import { useNavigate } from 'react-router-dom';

const Items = ({ item }) => {
    const { _id, name, supplierName, price, img, quantity, description } = item;
    const navigate = useNavigate();
    const navigateToInventoryDetails = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='rounded-lg hover:bg-slate-300 duration-500 ease-in'>
            <div className='w-full p-4'>
                <img className='w-full mx-auto rounded-lg' src={img} alt="" />
            </div>
            <div className=''>
                <h3 className='text-center text-xl font-bold'>{name}</h3>
                <div className='mx-2'>
                    <p className='text-xl font-semibold'>Suppler:{supplierName}</p>
                    <p className='text-justify text-gray-600'>{description}</p>
                    <div className='flex justify-between'>
                        <p className='text-lg font-semibold'>Price:${price}</p>
                        <p className='text-lg font-semibold'>Quantity:{quantity}</p>
                    </div>
                </div>
            </div>
            <button onClick={() => navigateToInventoryDetails(_id)} className='bg-red-400 block mx-auto py-2 px-8 rounded-lg text-white text-xl font-semibold my-4'>Update</button>
        </div>
    );
};

export default Items;