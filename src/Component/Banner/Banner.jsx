import React from 'react';

const Banner = ({heading, subHeading, img}) => {
    return (
        <div className='overflow-hidden'>
            <div className='container mx-auto h-full md:h-screen'>
                <div className=' md:flex md:justify-between gap-10 md:items-center h-full'>
                    <div className=' space-y-2 md:flex-1'>
                        <h3>{heading}</h3>
                        <h4>{subHeading}</h4>
                        <h2>JOb Hunter</h2>
                        <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className=' px-5 py-2 bg-gray-500 text-cyan-300 text-xl'>Get Standerd</button>
                    </div>
                    <div className='md:flex-1 overflow-hidden'>
                        <img className=' w-full h-96 overflow-hidden' src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;