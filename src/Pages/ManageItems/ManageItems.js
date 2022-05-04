import React from 'react';
import useItems from '../../Hook/useItems';

const ManageItems = () => {
    const [items] = useItems();
    // const { _id, name, supplierName, price, img, quantity, description } = items;
    return (
        <div className='mb-24 mx-12'>
            <h2>Manage Items</h2>
            <table className='border border-slate-500 border-collapse w-full'>
                <tr className=''>
                    <th className=''>Id</th>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Supplier Name</th>
                    <th>Description</th>
                    <th>Quantiy</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
                {
                    items.map(item =>
                        <tr className=''>
                            <td>{item._id}</td>
                            <td><img className='w-1/2 mx-auto' src={item.img} alt="" /></td>
                            <td>{item.name}</td>
                            <td>{item.supplierName}</td>
                            <td className=''>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td><button>Delete</button></td>
                        </tr>
                    )
                }

            </table>
        </div >
    );
};

export default ManageItems;