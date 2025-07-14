import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const EmailLink = () => {
  const API_BASE = import.meta.env.VITE_BACKEND_URL;
   
    const [email,setEmail]=useState("");

    const handleSubmit=async(e)=>{
        //prevent page refresh
        e.preventDefault();
        try{
            //sending email as element of object as direct string cant be destructure
            //sending data with post request
            await axios.post(`${API_BASE}/EduNova/User/resettoken`,{email},{withCredentials:true});
            setEmail("")
        }
        catch(error){
            console.log(error);
        }

    }

  return (
    <div className='bg-[#000814]'>
      <div className='w-11/12 mx-auto bg-[#000814] h-screen flex flex-col justify-center items-center'>
           <div className='flex flex-col gap-2 lg:w-[40%] md:w-[65%] mx-auto'>
            <p className='text-4xl text-white font-semibold'>Reset your password</p>
            <p className='text-lg font-medium mb-5 mt-3 text-gray-400'>Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery</p>
           <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
              <div className='flex flex-col'>
              <label className='text-white relative mb-1'>Email Address<span className='absolute text-red-500'>*</span></label>
              
              <input
              className='text-white outline-none p-3 rounded-xl bg-[#2c333f] border-b-[1px] broder-gray-400'
                type='text'
                name="email"
                placeholder='Enter Email Address'
                value={email}
               onChange={(e) => 
               setEmail(e.target.value)
                }
              />
              </div>
              
              <button className='text-black text-medium font-medium bg-yellow-400 rounded-xl w-full  p-3' type='submit'>Submit</button>
           </form>
           <NavLink to={"/"} className='mt-3 flex flex-row items-center gap-2 text-white'><FaArrowLeft/> Back To Login</NavLink>
           </div>
      </div>
    </div>
  )
}

export default EmailLink
