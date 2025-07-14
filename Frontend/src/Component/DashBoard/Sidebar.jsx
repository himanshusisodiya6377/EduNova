import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { MdCastForEducation } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { useContext } from 'react';
import {AuthContext} from "../../ContextApi/Auth"
import { IoAdd } from "react-icons/io5";

const Sidebar = () => {

    const {data}=useContext(AuthContext);
    const[mini,setMini]=useState(false);

    useEffect(() => {
          const handleResize = () => {
          if (window.innerWidth < 768) {
          setMini(true);  // Close the sidebar on large screens
         }
         else setMini(false)
           };
    
           //adding to dom
          window.addEventListener("resize", handleResize);
            
          handleResize(); // run on mount
               //removing from document
         return () => window.removeEventListener("resize", handleResize);
           }, []);

           console.log(mini)
    // console.log(data);
  return (
    <div className='flex md:flex-col flex-row md:gap-6 md:p-5 text-white bg-[#161D29] md:min-h-screen'>
    <div className='md:mt-12 flex md:flex-col flex-row md:gap-2 gap-10 text-white'>
      <div className='flex p-2 md:ml-0 ml-5 hover:border-b-2 md:hover:border-l-2 border-yellow-300 hover:bg-[#3D2A01] hover:text-[#FFD60A] flex-row gap-2 md:items-center'>
       
        <NavLink to="/dashboard/profile"> <CgProfile className='text-2xl md:text-xl'/></NavLink>
        {!mini && <NavLink to="/dashboard/profile" className="text-semibold"> My Profile</NavLink>}
      </div>
      <div>
      {data.accountType==="Student"? <div className='flex p-2 hover:border-b-2 md:hover:border-l-2 border-yellow-300  hover:bg-[#3D2A01] hover:text-[#FFD60A] flex-row gap-2 items-center'>
      
      <NavLink to="/dashboard/enrolledcourses"><MdCastForEducation className='text-2xl'/></NavLink>
      {!mini && <NavLink to="/dashboard/enrolledcourses">Enrolled Courses</NavLink>}
      </div>:
      <div className='flex flex-col  gap-2'>
      <div className='flex flex-row p-2 gap-2 hover:border-b-2 md:hover:border-l-2 border-yellow-300  hover:bg-[#3D2A01] hover:text-[#FFD60A]'>
      <NavLink to="/dashboard/mycourse"><MdCastForEducation className='text-2xl'/></NavLink>
      {!mini && <NavLink to="/dashboard/mycourse">My Courses</NavLink>}
      </div>
      <div className='flex p-2 items-center flex-row gap-2 hover:border-b-2 md:hover:border-l-2 border-yellow-300  hover:bg-[#3D2A01] hover:text-[#FFD60A]'>
        <NavLink to="/dashboard/addcourse"><IoAdd className='text-xl'/></NavLink>
        <NavLink to="/dashboard/addcourse">Add Course</NavLink>
      </div>
      </div>
      }
      
      </div>
      {
        data.accountType==="Student"?
        <div className='flex p-2 hover:border-b-2 md:hover:border-l-2 border-yellow-300  hover:bg-[#3D2A01] hover:text-[#FFD60A] flex-row gap-2 md:items-center'>
      
      <NavLink to="/dashboard/cart"><CiShoppingCart className='text-2xl'/></NavLink>
      {!mini && <NavLink to="/dashboard/cart">Cart</NavLink>}
      </div>:
      <div></div>
      }
    </div>
      {/* //line */}
      <div className='bg-gray-600 h-[1px]'></div>
      <div>
      <div className='flex flex-row p-2 hover:border-b-2 md:hover:border-l-2 border-yellow-300  hover:bg-[#3D2A01] hover:text-[#FFD60A] md:gap-2 ml-10 md:ml-0 items-center'>
      
      <NavLink to="/dashboard/setting"><IoSettingsOutline className='text-2xl'/></NavLink>
       {!mini && <NavLink to="/dashboard/setting">Setting</NavLink>}
      </div>
      
       {/* //logout logic here */}
      </div>
    </div>
  )
}

export default Sidebar
