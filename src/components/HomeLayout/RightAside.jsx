import React from 'react';
import SocialLogin from './SocialLogin';
import FIndUs from '../FIndUs';
import QZone from '../QZone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FIndUs></FIndUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;