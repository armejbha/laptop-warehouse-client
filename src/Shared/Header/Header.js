import React, { useState } from 'react';
// import icon from '../../images/Icon/laptopOne.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import auth from '../../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth);
    const [open, setOpen] = useState(false);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='sticky top-0 bg-red-200 w-full'>
            <nav className='flex justify-between items-center md:mx-16 py-4'>
                <div>
                    <h1 className='text-4xl text-blue-600 mr-2'>Laptop Warehouse</h1>
                </div>
                <div onClick={() => setOpen(!open)} className='w-7 h-7 md:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <ul className={`md:flex absolute md:static right-4 duration-75 ease-in shadow-lg md:shadow-none rounded-lg bg-stone-600 md:bg-transparent px-8 py-2 md:px-0 md:py-0 ${open ? 'top-8' : 'top-[-150px] md:top-0'}`}>
                    <li className=''>
                        <Link className='md:mr-6 text-sm md:text-xl' to='/home'>Home</Link>
                    </li>
                    <li className=''>
                        <Link className='md:mr-6 text-sm md:text-xl' to='/blogs'>Blogs</Link>
                    </li>
                    {
                        user &&
                        <>
                            <li>
                                <Link className='md:mr-6 text-sm md:text-xl' to='/manageItems'>ManageItems</Link>
                            </li>
                            <li>
                                <Link className='md:mr-6 text-sm md:text-xl' to='/addItem'>AddItem</Link>
                            </li>
                            <li>
                                <Link className='md:mr-6 text-sm md:text-xl' to='/myItem'>MyItem</Link>
                            </li>
                        </>

                    }

                    {
                        user ?
                            <li><button onClick={handleSignOut} className='text-sm md:text-xl' to='/login'>SignOut</button></li>
                            :
                            <li><Link className='text-sm md:text-xl' to='/login'>Login</Link></li>
                    }
                </ul>
            </nav>
        </div >
    );
};

export default Header;

