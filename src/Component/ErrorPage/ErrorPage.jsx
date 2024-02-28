import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className='h-screen w-full flex justify-center items-center '>
            <div className='text-center mx-auto'>
                <h2>OOPS!!</h2>
                <p>Sorry, an unespected error has occurred.</p>
                <button className='p-5 bg-slate-7 text-[2xl]'>Back</button>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;