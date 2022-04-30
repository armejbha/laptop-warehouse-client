import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='h-screen banner-img bg-cover flex items-center'>
            <div className="mx-10 text-white w-full md:w-2/4">
                <h1 className="text-5xl">We are made </h1>
                <h1 className="text-yellow-400 text-5xl">for service</h1>
                <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                    tellus,
                    luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <button className="border-2 px-5 py-2 mt-10 text-xl">DISCOVER MORE</button>
            </div>
        </div>
    );
};

export default Banner;