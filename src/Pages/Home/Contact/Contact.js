import React from 'react';

const Contact = () => {
    return (
        <div className='md:w-1/2 mx-auto text-center py-16'>
            <h2 className='text-3xl font-bold'>GET IN TOUCH WITH US</h2>
            <p className='text-lg font-light mt-2 text-gray-600'>Interested in speaking with one of our sales members or to our communications team?We would love to hear from you!</p>
            <div className='md:flex justify-between items-center mt-4'>
                <button className='block mx-auto bg-red-400 text-lg py-1 px-4 text-white rounded-lg'>DIMENTION YOUR SYSTERM NOW</button>
                <button className='block mx-auto bg-red-400 text-lg py-1 px-4 text-white rounded-lg mt-4 md:mt-0'>CONTACT OUR TEAM</button>
            </div>
        </div>
    );
};

export default Contact;