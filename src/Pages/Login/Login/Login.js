import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-cyan-700 h-screen pt-48 '>
            <div className='w-4/12 bg-white mx-auto rounded-lg py-16'>
                <h2 className='text-center text-2xl mb-4'>Login</h2>
                <div className='border-b-2 mb-4'></div>
                <form className='w-8/12 mx-auto'>
                    <input className='block w-full outline-0 bg-sky-100 text-bold py-1 px-4 rounded-full' type="email" name="email" id="" placeholder='Enter Email' />
                    <input className='block w-full outline-0 bg-sky-100 text-bold py-1 px-4 rounded-full mt-2' type="text" name="password" id="" placeholder='Enter password' />
                    <input className='block w-full outline-0 bg-red-400 text-white text-normal py-1 px-4 rounded-full mt-2' type="submit" value="Login" />
                </form>
                <p className='text-center mt-4'>Don't have an Account?<Link className='text-sky-500' to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;