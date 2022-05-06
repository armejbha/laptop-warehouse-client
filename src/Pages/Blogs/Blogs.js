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
                <div className='grid md:grid-cols-2 gap-4 mt-4'>
                    <div className='mx-auto'>
                        <h5 className='text-center text-xl mt-3 mb-4'>Javascript</h5>
                        <div className='border-b mb-4'></div>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            Javascript is programming language.It run web browser with browser enginge.
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            It used for client side font end development.
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            It able to add html and play with dom.
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            It build with c++ and chrome browser it run with v8 engine.
                        </p>
                    </div>
                    <div className='mx-auto'>
                        <h5 className='text-center text-xl mt-3 mb-4'>Nodejs</h5>
                        <div className='border-b mb-4'></div>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            Node.js is runtime enviroment of javascript.
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            It used for back end server database related work.
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            But it can not to play with html.
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            It build with c,c++ and javascript.
                        </p>
                    </div>
                </div>
            </div>
            <div className='border border-blue-400 rounded-lg shadow-lg my-4 py-4'>
                <h3 className='text-center text-3xl text-orange-600 mt-4'>What is the different between sql and nosql?</h3>
                <div className='grid md:grid-cols-2 gap-4 mt-4'>
                    <div className='mx-auto'>
                        <h5 className='text-center text-xl mt-3 mb-4'>Javascript</h5>
                        <div className='border-b mb-4'></div>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, animi!
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, impedit.
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, commodi?
                        </p>
                    </div>
                    <div className='mx-auto'>
                        <h5 className='text-center text-xl mt-3 mb-4'>Nodejs</h5>
                        <div className='border-b mb-4'></div>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, alias?
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, consectetur.
                        </p>
                        <p className='mb-2'>
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