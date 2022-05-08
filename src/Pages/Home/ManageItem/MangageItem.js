import React from 'react';
import photo from '../../../images/manage/manage.jpg';
const MangageItem = () => {
    return (
        <div className='grid md:grid-cols-2 items-center mx-2 md:mx-24 my-8 md:my-12'>
            <div>
                <img src={photo} alt="" />
            </div>
            <div>
                <h2 className='text-center text-3xl font-bold'>Manage Your Items</h2>
                <p className='text-center text-gray-600 mt-4'>If you want to manage all inventory item please click below button</p>
                <button className='block mx-auto bg-red-400 text-lg py-1 px-4 text-white rounded-lg mt-4'>Manage Items</button>
            </div >
        </div >
    );
};

export default MangageItem;