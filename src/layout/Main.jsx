import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Component/SharePage/Navber/Navber';
import Footer from '../Component/SharePage/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;