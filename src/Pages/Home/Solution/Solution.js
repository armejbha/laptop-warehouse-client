// import React, { useState } from 'react';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
const Solution = ({ solution }) => {
    const { title, description, img } = solution;
    // const [show, setShow] = useState(false);
    return (
        <div className='hover:shadow-md hover:bg-slate-300 duration-500 ease-in h-fit mx-2 md:mx-0'>
            <img className='w-full h-52' src={img} alt="" />
            <div className='mx-4 py-2'>
                <h2 className='text-xl'>{title}</h2>
                <p className='text-justify text-gray-600'>{description}</p>
                <ArrowNarrowRightIcon className='w-7 h-7'></ArrowNarrowRightIcon>
            </div>
        </div>
    );
};

export default Solution;