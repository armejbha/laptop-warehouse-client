import React from 'react';
import { useNavigate } from 'react-router-dom';

const Items = ({ item }) => {
    const { _id, name, seller, price, img, quantity } = item;
    const navigate = useNavigate();
    const navigateToInventoryDetails = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='rounded-lg bg-white'>
            <img className='w-1/2 h-4/6 m-auto py-8' src={img} alt="" />
            <div className='text-center'>
                <h3>{name}</h3>
                <p>{price}</p>
                <p>{seller}</p>
                <p>{quantity}</p>
            </div>
            <button onClick={() => navigateToInventoryDetails(_id)} className='bg-red-400 w-full py-4'>Update</button>
        </div>
    );
};

export default Items;