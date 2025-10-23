import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>

            <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
                <p>Match Highlights: Germany vs Spain — as it happened !</p>
                <p>Match Highlights: Germany vs Spain — as it happened !</p>
                <p>Match Highlights: Germany vs Spain — as it happened !</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;