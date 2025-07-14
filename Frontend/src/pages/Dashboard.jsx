import React from 'react';
import Sidebar from '../Component/DashBoard/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row md:h-screen w-full bg-[#000814]">

      {/* Sidebar: shown first so it appears on the left in md:flex-row */}
      <div
        className="
          w-full 
          md:w-[18%] 
          md:static 
          fixed 
          bottom-0 
          z-50 
          bg-[#000814] 
          border-t border-gray-700
        "
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full overflow-y-auto">
        <div className="w-11/12 mx-auto mt-[7%]">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
