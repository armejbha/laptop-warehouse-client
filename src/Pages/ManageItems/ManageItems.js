import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useItems from '../../Hook/useItems';
import ManageItem from './ManageItem';
import ManageItemMobile from './ManageItemMobile';

const ManageItems = () => {
    const [items, setItems] = useItems();
    // const navigate = useNavigate();
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
                    const remainingItem = items.filter(item => item._id !== id);
                    setItems(remainingItem);
                })
        }
    }
    // const navigateToAddItem = () => {
    //     navigate('/addItem');
    // }
    return (
        <div>
            <h1 className='text-4xl font-bold text-center m-16'>My Inventory Items : {items.length}</h1>
            <Link className='bg-orange-400 block m-auto p-2 w-44 rounded-lg text-center font-bold mb-4' to='/additem'>Add Item</Link>
            <div className='md:flex justify-center hidden'>
                <table className='border-2 border-black border-solid m-4'>
                    <thead>
                        <tr>
                            <th className='border-2 border-black border-solid p-4'>Id</th>
                            <th className='border-2 border-black border-solid p-4'>Picture</th>
                            <th className='border-2 border-black border-solid p-4'>Name</th>
                            <th className='border-2 border-black border-solid p-4'>Description</th>
                            <th className='border-2 border-black border-solid p-4'>Supplier Name</th>
                            <th className='border-2 border-black border-solid p-4'>Quantity</th>
                            <th className='border-2 border-black border-solid p-4'>Price</th>
                            {/* <th className='border-2 border-black border-solid p-4'>Stock</th> */}
                            <th className='border-2 border-black border-solid p-4'>Delete</th>
                            <th className='border-2 border-black border-solid p-4'>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items?.map(item => <ManageItem key={item._id} item={item} handleDelete={handleDelete}></ManageItem>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    items?.map(item => <ManageItemMobile key={item._id} item={item} handleDelete={handleDelete}></ManageItemMobile>)
                }
            </div>
        </div>
    );
};

export default ManageItems;