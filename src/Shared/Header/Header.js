import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='fixed top-0 bg-red-300 w-full'>
            <nav className='flex justify-between items-center md:mx-16'>
                <h1 className='text-2xl md:text-5xl'>Car Hub</h1>
                <div onClick={() => setOpen(!open)} className='w-7 h-7 md:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <ul className={`md:flex absolute md:static right-4 duration-75 ease-in shadow-lg md:shadow-none rounded-lg bg-stone-600 md:bg-white px-8 py-2 md:px-0 md:py-0 ${open ? 'top-8' : 'top-[-150px] md:top-0'}`}>
                    <li><Link className='md:mr-6 text-sm md:text-xl' to='/home'>Home</Link></li>
                    <li><a className='md:mr-6 text-sm md:text-xl' href='home#inventory'>Inventory</a></li>
                    <li><Link className='md:mr-6 text-sm md:text-xl' to='/home'>Home</Link></li>
                    <li><Link className='md:mr-6 text-sm md:text-xl' to='/home'>Home</Link></li>
                    <li><Link className='text-sm md:text-xl' to='/login'>Login</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;