import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            <div className='space-y-3'>
                <button className='btn btn-outline btn-secondary w-full'><FcGoogle size={24}></FcGoogle> Login With Google</button>
                <button className='btn btn-outline btn-primary w-full'><BsGithub size={24}></BsGithub> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;