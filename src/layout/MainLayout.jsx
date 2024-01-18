import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeNavbar from '../Components/Shared/Navbar/HomeNavbar/HomeNavbar';

const MainLayout = () => {
    return (
        <>
            <HomeNavbar/>
        <main>
          <Outlet />
        </main>
      </>
    );
};

export default MainLayout;