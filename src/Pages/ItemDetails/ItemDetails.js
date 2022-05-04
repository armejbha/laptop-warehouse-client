
import { useParams } from 'react-router-dom';
import useItemsDetails from '../../Hook/useItemsDetails';

const ItemDetails = () => {
    const { id } = useParams();
    const [item] = useItemsDetails(id);
    return (
        <div className='md:w-1/2 mx-auto my-8'>
            <div className='grid md:grid-cols-2 border-2 rounded-lg p-4'>
                <div>
                    <img className='h-full rounded-lg' src={item?.img} alt="" />
                </div>
                <div className='text-center'>
                    <h3 className='font-extrabold text-xl'>{item?.name}</h3>
                    <p className='font-extralight text-lg'>{item?.price}</p>
                    <p>{item?.seller}</p>
                    <p>{item?.quantity}</p>
                    <p className='text-justify mx-4'>{item?.description}</p>
                    <button className='bg-red-400 block rounded-lg text-white mx-auto py-2 px-8 mt-4'>Delivered</button>
                </div>
            </div>
            <div className='mx-4 grid md:grid-cols-2 mt-4 gap-4'>
                <div className='border border-black py-8 px-4 rounded-sm'>
                    <h2 className='text-center text-xl font-bold'>Restock Quantity</h2>
                    <div className='w-10/12 mx-auto'>
                        <input className='w-full mx-auto block outline-0 bg-sky-100 text-bold py-1 px-4 rounded-md mt-2' type="number" name="number" id="" placeholder='Enter Quantity' />
                        <button className='w-full mx-auto block bg-red-400 text-white text-normal py-1 rounded-lg mt-2'>Add Quantity</button>
                    </div>
                </div>
                <div className='border border-black py-8'>
                    <h2 className='text-center text-xl font-bold mb-4'>Manage Items</h2>
                    <button className='w-5/6 mx-auto block bg-red-400 text-white text-normal py-1 px-4 rounded-lg'>Click Here</button>
                </div>
            </div>

        </div>
    );
};

export default ItemDetails;