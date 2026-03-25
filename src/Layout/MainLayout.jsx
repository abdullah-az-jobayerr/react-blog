import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import MainFooter from '../Components/MainFooter';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <MainFooter/>
        </div>
    );
};

export default MainLayout;