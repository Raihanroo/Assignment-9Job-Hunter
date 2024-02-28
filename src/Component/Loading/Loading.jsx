import React from 'react';
import LoadingImg from '../../assets/Loading.gif'

const Loading = () => {
    return (
        <div>
        <div className='h-screen w-full flex justify-center items-center '>
        <div className='text-center mx-auto'>
           <p className='flex'>
            <span className='text-5xl'>L</span>
            <span><img className='w-10 h-10' src={LoadingImg} alt="" /></span>
            <span className='text-5xl'>ading</span>
           </p>
           
        </div>
    </div>
    </div>
    );
};

export default Loading;