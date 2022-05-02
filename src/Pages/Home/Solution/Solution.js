// import React, { useState } from 'react';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
const Solution = ({ solution }) => {
    const { title, description, img } = solution;
    // const [show, setShow] = useState(false);
    return (
        <div className='hover:shadow-md duration-500 ease-in h-fit'>
            <img className='w-full h-52' src={img} alt="" />
            <div>
                <h2 className='text-xl'>{title}</h2>
                <p>{description}</p>
                <ArrowNarrowRightIcon className='w-7 h-7'></ArrowNarrowRightIcon>
            </div>
        </div>
    );
};

export default Solution;