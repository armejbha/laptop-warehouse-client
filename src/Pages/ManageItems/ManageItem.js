import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageItem = ({ item, handleDelete }) => {
    const { _id, name, description, supplierName, img, price, quantity, stock } = item;
    const navigate = useNavigate()
    const inventoryDetails = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <tr>
            <th className='border-2 border-black border-solid p-4'>{_id}</th>
            <th className='border-2 border-black border-solid p-4'><img className='w-44' src={img} alt="" /></th>
            <th className='border-2 border-black border-solid p-4'>{name}</th>
            <th className='border-2 border-black border-solid p-4'>{description}</th>
            <th className='border-2 border-black border-solid p-4'>{supplierName}</th>
            <th className='border-2 border-black border-solid p-4'>{quantity}</th>
            <th className='border-2 border-black border-solid p-4'>${price}</th>
            {/* <th className='border-2 border-black border-solid p-4'>{stock}</th> */}
            <th className='border-2 border-black border-solid p-4'><button onClick={() => handleDelete(_id)} className='bg-red-500 p-2 rounded-lg text-white font-bold'>Delete</button></th>
            <th className='border-2 border-black border-solid p-4'><button onClick={() => inventoryDetails(_id)} className='bg-red-500 p-2 rounded-lg text-white font-bold'>Update</button></th>
        </tr>
    );
};

export default ManageItem;