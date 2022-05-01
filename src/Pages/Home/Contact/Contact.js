import React from 'react';

const Contact = () => {
    return (
        <div className='md:w-1/2 mx-auto text-center mb-16'>
            <h2 className='text-3xl font-bold'>GET IN TOUCH WITH US</h2>
            <p className='text-lg font-light'>Interested in speaking with one of our sales members or to our communications team?We would love to hear from you!</p>
            <div className='md:flex justify-between items-center'>
                <button className='bg-red-500 px-8 py-2 text-lg font-normal text-white rounded-md'>DIMENTION YOUR SYSTERM NOW</button>
                <button className='bg-red-500 px-8 py-2 text-lg font-normal text-white rounded-md mt-4 md:mt-0'>CONTACT OUR TEAM</button>
            </div>
        </div>
    );
};

export default Contact;