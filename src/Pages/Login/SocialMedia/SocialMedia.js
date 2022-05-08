import React from 'react';
import google from '../../../images/social/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import axios from 'axios';

const SocialMedia = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    let errorMessage;
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorMessage = <p className='text-red-600 text-center'>Error{error?.message}</p>
    }
    async function userCollect() {
        if (user) {
            console.log(user);
            const email = user?.user?.email;
            console.log(email);
            const { data } = await axios?.post('http://localhost:5000/login', { email });
            console.log(data);
            localStorage.setItem('accessToken', data.accessToken);
            navigate(from, { replace: true });
        }
    }
    userCollect();
    return (
        <div className='mt-2'>
            {errorMessage}
            <p className='text-center'>Or Sign In With</p>
            <div className='flex justify-between items-center w-10/12 md:w-8/12 mx-auto mt-4'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='w-full bg-blue-400 py-2 px-3 mr-2 rounded-sm'>
                    <div className='flex justify-center items-center w-1/2 mx-auto'>
                        <img style={{ width: '25px' }} src={google} alt="" />
                        <span className='pl-2'>Google</span>
                    </div>
                </button>
            </div >
        </div >
    );
};

export default SocialMedia;