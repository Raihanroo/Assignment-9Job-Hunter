import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            {/* Navber start */}
            <Navbar></Navbar>
            {/* Navber end */}
            {/* outlate main section stare  */}
            <Outlet/>
            {/* outlate main section  end */}
            {/* Footer section stared */}
            <Footer></Footer>
            <ToastContainer/>
            {/* Footer section end */}
        </div>
    );
};

export default Root;