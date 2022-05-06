import React from 'react';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
const SocialMedia = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userOne, loadingOne, errorOne] = useSignInWithGithub(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    let errorMessage;
    if (loading || loadingOne) {
        return <Loading></Loading>
    }
    if (error || errorOne) {
        errorMessage = <p className='text-red-600 text-center'>Error{error?.message}{errorOne?.message}</p>
    }
    if (user || userOne) {
        navigate(from, { replace: true });
    }
    return (
        <div className='mt-2'>
            {errorMessage}
            <p className='text-center'>Or Sign In With</p>
            <div className='flex justify-between items-center w-10/12 md:w-8/12 mx-auto mt-4'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='w-full bg-blue-400 py-2 px-3 mr-2 rounded-sm'>
                    <div className='flex items-center w-1/2 mx-auto'>
                        <img style={{ width: '25px' }} src={google} alt="" />
                        <span className='pl-1'>Google</span>
                    </div>

                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='w-full bg-gray-700 py-2 px-3 rounded-sm'>
                    <div className='flex items-center w-1/2 mx-auto'>
                        <img style={{ width: '25px' }} src={github} alt="" />
                        <span className='pl-1 text-white'>Github</span>
                    </div>

                </button>
            </div >
        </div >
    );
};

export default SocialMedia;