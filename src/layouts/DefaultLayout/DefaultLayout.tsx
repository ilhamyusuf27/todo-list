// import React from 'react';
import { Outlet } from 'react-router';

import SideNavbar from '../../components/SideNavbar';

// type Props = {}

const DefaultLayout = () => {
  return (
    <div className="flex">
      <SideNavbar />
      <div className="flex-1 pl-75">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
