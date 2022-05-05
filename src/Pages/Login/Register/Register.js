import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialMedia from '../SocialMedia/SocialMedia';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../../Shared/Loading/Loading';
const Register = () => {
    const [agree, setAgree] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    let errorMessage;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        errorOne,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, errorTwo] = useUpdateProfile(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        updateProfile({ displayName: name });
        console.log(email, password, name);
    }
    if (errorOne || errorTwo) {
        errorMessage = <p className='text-red-600 mt-2'>Error:{errorOne?.message}{errorTwo?.message}</p>
    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='bg-gradient-to-r from-cyan-800 to-cyan-500 h-screen  pt-24'>
            <div className='w-4/12 bg-white mx-auto rounded-lg py-16'>
                <h2 className='text-center text-2xl mb-4'>Sign Up</h2>
                <div className='border-b-2 mb-4'></div>
                <form onSubmit={handleSubmit} className='w-8/12 mx-auto'>
                    <input className='block w-full outline-0 bg-sky-100 text-bold py-1 px-4 rounded-full' type="text" name="name" id="" placeholder='Your Name' required />
                    <input className='block w-full outline-0 bg-sky-100 text-bold py-1 px-4 rounded-full mt-2' type="email" name="email" id="" placeholder='Enter Email' required />
                    <input className='block w-full outline-0 bg-sky-100 text-bold py-1 px-4 rounded-full mt-2' type="text" name="password" id="" placeholder='Enter password' required />
                    <div className='my-2'>
                        <input onClick={() => setAgree(!agree)} className='mr-2' type="checkbox" name="checkbox" id="checkbox" />
                        <label className={`${agree ? '' : 'text-red-600'}`} htmlFor='checkbox'>Accept all Terms and Condition</label>
                    </div>
                    <input className='block w-full outline-0 bg-red-800 text-white text-normal py-1 px-4 rounded-full mt-2' type="submit" value="Sign Up" disabled={!agree} />
                    {errorMessage}
                </form>
                <SocialMedia></SocialMedia>
                <p className='text-center mt-4'>Already have an Account?<Link className='text-sky-500' to='/login'>Login In Now</Link></p>
            </div>
        </div>
    );
};

export default Register;