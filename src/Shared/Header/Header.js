import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='flex justify-between items-center md:mx-16'>
            <h1 className='text-2xl md:text-5xl'>Car Hub</h1>
            <div onClick={() => setOpen(!open)} className='w-7 h-7 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex absolute md:static right-0 duration-75 ease-in px-8 md:px-0 ${open ? 'top-6' : 'top-[-150px] md:top-0'}`}>
                <li><Link className='md:mr-6 text-sm md:text-xl' to='/home'>Home</Link></li>
                <li><Link className='md:mr-6 text-sm md:text-xl' to='/home'>Home</Link></li>
                <li><Link className='md:mr-6 text-sm md:text-xl' to='/home'>Home</Link></li>
                <li><Link className='md:mr-6 text-sm md:text-xl' to='/home'>Home</Link></li>
                <li><Link className='text-sm md:text-xl' to='/home'>Home</Link></li>
            </ul>
        </nav>
    );
};

export default Header;