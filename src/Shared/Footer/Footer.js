import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div className=' bg-sky-900 pb-12'>
            <div className='border-b border-gray-500'>
                <div className='md:mx-32 grid md:grid-cols-3'>
                    <div className='border border-gray-500 py-24'>
                        <h3 className='text-3xl text-center'>Warehouse</h3>
                        <div className='text-center'>
                            <p>
                                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                <span className='ml-4'>+880170000000</span>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                <span className='ml-4'>warehouse@gamil.com</span>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon><span className='ml-4'>mohakhali,dhaka,bangladesh</span>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon><span className='ml-4'>(+612) 2531 5600</span>
                            </p>
                        </div>
                        <div className='flex justify-center items-center ml-4 mt-2'>
                            <div className='w-6 h-6 mr-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                            </div>
                            <div className='w-6 h-6 mr-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                            </div>
                            <div className='w-6 h-6 mr-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                            </div>
                            <div className='w-6 h-6 mr-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                            </div>
                            <div className='w-6 h-6 mr-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-500 py-24'>
                        <h3 className='text-3xl text-center'>Service Provide</h3>
                        <div className='text-center'>
                            <p>Contact us</p>
                            <p>Help and advice</p>
                            <p>Update& Delivered</p>
                            <p>Terms and conditions</p>
                            <p>Refund Policy</p>
                        </div>
                    </div>
                    <div className='border border-gray-500 py-24'>
                        <h3 className='text-center text-3xl'>NEWSLETTER</h3>
                        <p className='text-center mx-4 mb-4'>Sign up for newsletter to receive Update news about laptop warehouse.</p>
                        <div className='ml-12'>
                            <input className='w-5/6  text-center font-normal py-4 outline-0' type="email" name="" id="" placeholder='ENTER YOUR EMAIL' />
                            <button className='w-5/6 text-center py-4 mt-2 bg-red-400 font-semibold text-white'>SUBSCRIBE</button>
                        </div>

                    </div>

                </div>
            </div>
            <div className='text-center mt-2 mb-4'>
                <p>
                    <span className='border-x border-gray-600 text-sm px-2'>Apple</span>
                    <span className='border-r border-gray-600 text-sm px-2'>Dell</span>
                    <span className='border-r border-gray-600 text-sm px-2'>Hp</span>
                    <span className='border-r border-gray-600 text-sm px-2'>Acer</span>
                    <span className='border-r border-gray-600 text-sm px-2'>Lenovo</span>
                    <span className='border-r border-gray-600 text-sm px-2'>Asus</span>
                    <span className='border-r border-gray-600 text-sm px-2'>Fujitsu</span>
                </p>
            </div>
            <p className='text-center text-white text-bold'>Copyright <span>&copy;</span> Laptop warehouse.All rights reserved.</p>
        </div>
    );
};

export default Footer;
