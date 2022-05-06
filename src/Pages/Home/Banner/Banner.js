import React from 'react';
import banner from '../../../images/Icon/laptopOne.png';
const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-900 to-cyan-600 h-screen'>
            <div div className='grid md:grid-cols-2 items-center gap-8 md:gap-4 mx-4 md:mx-12 py-16 md:py-24' >
                <div className='order-2 md:order-1'>
                    <h1 className='text-5xl md:text-6xl font-bold'>Welcome to</h1>
                    <h1 className='text-3xl font-bold text-blue-400 mt-2 md:mt-4'>Laptop Warehouse</h1>
                    <p className='py-4 text-gray-900'>We can simply say sports car is small low car with a high-powered engine and generally seats two people.Lamborgini Huracan is one of them.It's  a famous sports car for many people.Specialy celebrity mostly use this car.</p>
                    <button className='bg-red-400 text-lg py-1 px-4 text-white rounded-lg font-semibold '>SEE MORE</button>
                </div>
                <div className='order-1 md:order-2'>
                    <img src={banner} alt="" />
                </div>
            </div >
        </div >
    );
};

export default Banner;