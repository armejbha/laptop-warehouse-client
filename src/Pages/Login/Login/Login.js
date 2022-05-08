import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialMedia from '../SocialMedia/SocialMedia';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../../Shared/Loading/Loading';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef('');
    let errorMessage;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || '/';


    if (error) {
        errorMessage = <p className='text-center text-red-800 mt-2'>Email address and password don't match</p>
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
    }
    const forgetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('send email');
        }
        else {
            toast('please enter your email');
        }
    }
    return (
        <div className='bg-gradient-to-r from-cyan-900 to-cyan-600 h-screen py-12 md:py-24 '>
            <div className='md:w-4/12 bg-white mx-2 md:mx-auto rounded-lg py-16'>
                <h2 className='text-center text-2xl mb-4'>Login</h2>
                <div className='border-b-2 mb-4'></div>
                <form onSubmit={handleSubmit} className='md:w-8/12 mx-12 md:mx-auto'>
                    <input className='block w-full outline-0 bg-sky-100 text-bold py-1 px-4 rounded-full'
                        ref={emailRef} type="email" name="email" id="" placeholder='Enter Email' />

                    <input className='block w-full outline-0 bg-sky-100 text-bold py-1 px-4 rounded-full mt-2' type="text" name="password" id="" placeholder='Enter password' />

                    <p className='ml-2 my-2'><Link to="/login" onClick={forgetPassword} className=''>Forget password?</Link></p>

                    <input className='block w-full outline-0 bg-red-400 text-white text-normal py-1 px-4 rounded-full mt-2' type="submit" value="Login" />
                    {errorMessage}
                </form>
                <SocialMedia></SocialMedia>
                <p className='text-center mt-4'>Don't have Account?<Link className='text-sky-500' to='/register'>Sign UP Now</Link></p>
                <Toaster />
            </div>
        </div>
    );
};

export default Login;