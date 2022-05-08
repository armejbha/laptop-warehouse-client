import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        const url = `http://localhost:5000/items`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                alert('Item add');
                navigate('/manageitems')
            })
    };
    return (
        <div className='bg-slate-100 h-screen pt-24'>
            <div className='md:w-3/12 mx-auto hover:bg-slate-300 duration-500 ease-in p-2 rounded-md'>
                <h2 className='text-center text-2xl font-bold mt-4 '>Add New Item</h2>
                <form className='p-8' onSubmit={handleSubmit(onSubmit)}>
                    <input className='block w-full px-2 py-2 border-2 border-black rounded-md outline-0 bg-gray-300' placeholder='Name' value={user.email} readOnly {...register("email", { required: true })} />
                    <input className='block w-full px-2 py-2 border-2 border-black rounded-md outline-0 bg-gray-300' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='block w-full px-2 py-2 border-2 border-black rounded-md outline-0 bg-gray-300 mt-2' placeholder='Description' {...register("description")}></textarea>
                    <input className='block w-full px-2 py-2 border-2 border-black rounded-md outline-0 bg-gray-300 mt-2' placeholder='Supplier Name' type="text" {...register("supplierName")} />
                    <input className='block w-full px-2 py-2 border-2 border-black rounded-md outline-0 bg-gray-300 mt-2' placeholder='Price' type="text" {...register("price")} />
                    <input className='block w-full px-2 py-2 border-2 border-black rounded-md outline-0 bg-gray-300 mt-2' placeholder='Quantity' type="text" {...register("quantity")} />
                    <input className='block w-full px-2 py-2 border-2 border-black rounded-md outline-0 bg-gray-300 mt-2' placeholder='ImageUrl' type="text" {...register("img")} />
                    <input className='block w-full px-2 py-2 border-2 border-black rounded-md outline-0 bg-gray-300 mt-2 text-xl font-bold' type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;