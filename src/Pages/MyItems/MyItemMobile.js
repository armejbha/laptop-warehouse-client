import React from 'react';

const MyItemMobile = ({ item, handleDelete }) => {
    const { _id, name, description, supplierName, img, price, quantity, stock } = item;
    return (
        <div className='block md:hidden w-full p-4 mt-8 hover:bg-slate-300 duration-500 ease-in'>
            <div className='w-full p-4'>
                <img className='w-full mx-auto rounded-lg' src={img} alt="" />
            </div>
            <div className=''>
                <h3 className='text-center text-xl font-bold'>{name}</h3>
                <div className='mx-2'>
                    <p className='text-xl font-semibold'>Suppler:{supplierName}</p>
                    <p className='text-justify text-gray-600'>{description}</p>
                    <div className='flex justify-around'>
                        <p className='text-lg font-semibold'>Price:${price}</p>
                        <p className='text-lg font-semibold'>Quantity:{quantity}</p>
                    </div>
                </div>
                <button onClick={() => handleDelete(_id)} className='bg-orange-300 p-2 w-1/4 block m-auto mt-8 rounded-lg font-bold'>Delete</button>
            </div>
        </div>
    );
};

export default MyItemMobile;