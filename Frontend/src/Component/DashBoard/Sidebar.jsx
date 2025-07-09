import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { MdCastForEducation } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { useContext } from 'react';
import {AuthContext} from "../../ContextApi/Auth"

const Sidebar = () => {

    const {data}=useContext(AuthContext);
    // console.log(data);
  return (
    <div className='flex flex-col gap-6 p-5 text-white bg-[#161D29] min-h-screen'>
    <div className='mt-12 flex flex-col gap-2 text-white'>
      <div className='flex p-2 hover:border-l-2 border-yellow-300 hover:bg-[#3D2A01] hover:text-[#FFD60A] flex-row gap-2 items-center'>
      <CgProfile className='text-xl'/>
      <NavLink to="/dashboard/profile" className="text-semibold">My Profile</NavLink>
      </div>
      <div>
      {data.accountType==="Student"? <div className='flex p-2 hover:border-l-2 border-yellow-300  hover:bg-[#3D2A01] hover:text-[#FFD60A] flex-row gap-2 items-center'>
      <MdCastForEducation/>
      <NavLink to="/dashboard/enrolledcourses">Enrolled Courses</NavLink>
      </div>:
      <div className='flex p-2 hover:border-l-2 border-yellow-300  hover:bg-[#3D2A01] hover:text-[#FFD60A] flex-row gap-2 items-center'>
      <MdCastForEducation/>
      <NavLink to="/dashboard/mycourse">My Courses</NavLink>
      </div>
      }
      
      </div>
      {
        data.accountType==="Student"?
        <div className='flex p-2 hover:border-l-2 border-yellow-300  hover:bg-[#3D2A01] hover:text-[#FFD60A] flex-row gap-2 items-center'>
      <CiShoppingCart/>
      <NavLink to="/dashboard/cart">Cart</NavLink>
      </div>:
      <div></div>
      }
    </div>
      {/* //line */}
      <div className='bg-gray-600 h-[1px]'></div>
      <div>
      <div className='flex flex-row p-2 hover:border-l-2 border-yellow-300  hover:bg-[#3D2A01] hover:text-[#FFD60A] gap-2 items-center'>
      <IoSettingsOutline/>
       <NavLink to="/dashboard/setting">Setting</NavLink>
      </div>
       {/* //logout logic here */}
      </div>
    </div>
  )
}

export default Sidebar
