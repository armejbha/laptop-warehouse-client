import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
const Blogs = () => {
    return (
        <div className='mx-2 md:mx-20 my-10'>
            <h1 className='text-center text-3xl text-blue-600'>What ours developer say?</h1>
            <div className='grid md:grid-cols-2 gap-16 mt-8'>
                <div className='border border-blue-400 rounded-lg shadow-lg'>
                    <h1 className='text-center text-3xl text-orange-600 mt-4'>When should you use nodejs and when should you use mongodb?</h1>
                    <p className='text-justify p-8 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis blanditiis? Nemo facilis sapiente, libero corporis quisquam numquam ratione placeat?
                    </p>
                </div>
                <div className='border border-blue-400 rounded-lg shadow-lg'>
                    <h1 className='text-center text-3xl text-orange-600 mt-4'>What is the purpose of jwt and how does it work?</h1>
                    <p className='text-justify p-8 text-lg'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis explicabo commodi, recusandae dolorem illum magni expedita nihil sunt iste! Dicta!
                    </p>
                </div>
            </div>
            <div className='border border-blue-400 rounded-lg shadow-lg my-4 py-4'>
                <h3 className='text-center text-3xl text-orange-600 mt-4'>What is the different between javascript and nodejs?</h3>
                <div className='grid grid-cols-2 gap-4 mt-4'>
                    <div className='mx-auto'>
                        <h5 className='text-center mt-3 border-b border-blue-400'>Javascript</h5>
                        <p>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, animi!
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, impedit.
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, commodi?
                        </p>
                    </div>
                    <div className='mx-auto'>
                        <h5 className='text-center mt-3 '>Nodejs</h5>
                        <p>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, alias?
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, consectetur.
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, harum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;