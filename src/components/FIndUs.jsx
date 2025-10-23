import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FIndUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div>
                <div className="join join-vertical w-full">
                    <button className="btn join-item bg-base-100 justify-start"><FaFacebook></FaFacebook> Facebook</button>
                    <button className="btn join-item bg-base-100 justify-start"><FaTwitter></FaTwitter> Twitter</button>
                    <button className="btn join-item bg-base-100 justify-start"><FaInstagram></FaInstagram> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FIndUs;