import React from 'react';

const Items = ({ item }) => {
    const { name, seller, price, img, quantity } = item;
    return (
        <div className='rounded-lg bg-white'>
            <img className='w-1/2 h-4/6 m-auto py-8' src={img} alt="" />
            <div className='text-center'>
                <h3>{name}</h3>
                <p>{price}</p>
                <p>{seller}</p>
                <p>{quantity}</p>
            </div>
            <button className='bg-red-400 w-full py-4'>Update</button>
        </div>
    );
};

export default Items;