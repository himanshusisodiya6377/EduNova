import React from 'react'
import { SiSpacemacs } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import Button from '../Homepage/Button';
import './Navbar.css'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-[#161D29]'>
      <div className='w-11/12 bg-[#161D29] lg:h-14 h-12 mx-auto flex flex-row justify-between items-center'>
       {/* logo+name */}
       <div className='flex flex-row gap-3'>
       <SiSpacemacs className='text-white lg:text-3xl text-2xl'/>
       <p className='font-bold lg:text-2xl text-xl text-white'>EduNova</p>
       </div>

       {/* Routes */}
       <div id="navcat" className='text-gray-300 flex lg:text-lg text-md  flex-row lg:gap-8 gap-3 font-medium'>
         <NavLink to={"/"}>Home</NavLink>
         <NavLink  to={"/Category"}>Category</NavLink>
         <NavLink  to={"/About"}>About</NavLink>
         <NavLink to={"/Contact"}>Contact Us</NavLink>
       </div>

       {/* login+singup */}
       <div id="navlog" className='flex flex-row  lg:gap-5 gap-2 mt-2 mb-2'>
        <Button path={"/login"} action={false} text={"Log in"}/>
        <Button path={"/singup"} action={false} text={"Sign Up"}/>
       </div>

       {/* bar */}
       <FaBars id='navbar' className='texl-3xl text-white' />
      </div>
    </div>
  )
}

export default Navbar
