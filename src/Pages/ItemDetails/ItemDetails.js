
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import useItemsDetails from '../../Hook/useItemsDetails';

const ItemDetails = () => {
    const { id } = useParams();
    const [modifiedCount, setModifiedCount] = useState('');
    const [item, setItem] = useState({});
    const url = `http://localhost:5000/items/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [modifiedCount])

    // add quantity 
    const quantityUpdate = event => {
        event.preventDefault();
        let oldQuantity = item.quantity;
        let newQuantity = event.target.quantity.value;
        let quantity = parseInt(oldQuantity) + parseInt(newQuantity);
        if (!quantity) {
            return alert('enter a valid quantity');
        }
        let newCount = '';
        setModifiedCount(newCount);
        const add = { quantity };
        const url = `http://localhost:5000/items/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(add),
        })
            .then(res => res.json())
            .then(data => {
                setModifiedCount(data.modifiedCount);
                alert('quantity added');
                event.target.reset();
            })
    }
    const deliveredItem = () => {
        let oldQuantity = item.quantity;
        let quantity = parseInt(oldQuantity) - 1;
        if (!quantity) {
            alert('No item avaliable');
            quantity = 0;
        }
        let newCount = '';
        setModifiedCount(newCount);
        const add = { quantity };
        const url = `http://localhost:5000/items/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(add),
        })
            .then(res => res.json())
            .then(data => {
                setModifiedCount(data.modifiedCount);
                alert('item delivered');
            })
    }


    const navigate = useNavigate();
    const goToManageItem = () => {
        navigate('/manageItems')
    }

    return (
        <div className='md:w-1/2 mx-auto my-16'>
            <div className='grid md:grid-cols-2 border-2 rounded-lg p-4 mx-4 md:mx-o'>
                <div>
                    <img className='h-full rounded-lg' src={item?.img} alt="" />
                </div>
                <div className=''>
                    <h3 className='text-center text-xl font-bold'>{item?.name}</h3>
                    <div className='mx-2'>
                        <p className='text-xl font-semibold my-2'>Suppler:{item?.supplierName}</p>
                        <p className='text-justify text-gray-600 mb-2'>{item?.description}</p>
                        <div className='flex justify-between'>
                            <p className='text-xl font-semibold'>Price:${item?.price}</p>
                            <p className='text-xl font-semibold'>Quantity:{`${item?.quantity}`}</p>
                        </div>
                    </div>
                    <button onClick={deliveredItem} className='bg-red-400 block rounded-lg text-white mx-auto py-2 px-8 mt-8'>Delivered</button>
                </div>
            </div>
            <div className='mx-4 grid md:grid-cols-2 mt-12 gap-4'>
                <div className='border-2 rounded-lg border-black py-8 px-4'>
                    <h2 className='text-center text-xl font-bold'>Restock Quantity</h2>
                    <form onSubmit={quantityUpdate} className='w-10/12 mx-auto'>
                        <input className='w-full mx-auto block outline-0 bg-sky-100 text-bold py-1 px-4 rounded-md mt-2' type="number" name="quantity" id="" placeholder='Enter Quantity' />
                        <input type="submit" value="Add Quantity" className='w-full mx-auto block bg-red-400 text-white text-normal py-1 rounded-lg mt-2' />
                    </form>
                </div>
                <div className='border-2 rounded-lg border-black py-8'>
                    <h2 className='text-center text-xl font-bold mb-4'>Manage Items</h2>
                    <button onClick={goToManageItem} className='w-5/6 mx-auto block bg-red-400 text-white text-normal py-1 px-4 rounded-lg'>Click Here</button>
                </div>
            </div>

        </div>
    );
};

export default ItemDetails;