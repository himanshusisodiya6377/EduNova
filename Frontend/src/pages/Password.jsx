import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';




const Password = () => {


  const {token}=useParams()
   
    const [data,setData]=useState({
      password:"",
      confirmpassword:"",
      token:token
    });

     
    

    const handleSubmit=async(e)=>{
        //prevent page refresh
        e.preventDefault();
        try{
            //sending email as element of object as direct string cant be destructure
            //sending data with post request
          
            console.log(data)
            await axios.put("http://localhost:3000/EduNova/User/changepassword",data,{withCredentials:true});
            // setData("")
        }
        catch(error){
            console.log(error);
        }

    }
  

  return (
     <div className='bg-[#000814]'>
      <div className='w-11/12 mx-auto bg-[#000814] h-screen flex flex-col justify-center items-center'>
           <div className='flex flex-col gap-2 w-[40%] mx-auto'>
            <p className='text-4xl text-white font-semibold'>Choose  new password</p>
            <p className='text-lg font-medium mb-5 mt-3 text-gray-400'>Almost done. Enter your new password and youre all set.</p>
           <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
              <div className='flex flex-col'>
              <label className='text-white relative mb-1'>New Password<span className='absolute text-red-500'>*</span></label>
              
              <input
              className='text-white outline-none p-3 rounded-xl bg-[#2c333f] border-b-[1px] broder-gray-400'
                type='password'
                name="password"
                placeholder='Enter New Password'
                value={data.password}
              onChange={(e) =>
               setData((prev) => ({
             ...prev,
              [e.target.name]: e.target.value,
             }))
             }
              />
              </div>

                 <div className='flex flex-col'>
              <label className='text-white relative mb-1'>Confirm New Password<span className='absolute text-red-500'>*</span></label>
              
              <input
              className='text-white outline-none p-3 rounded-xl bg-[#2c333f] border-b-[1px] broder-gray-400'
                type='password'
                name="confirmpassword"
                placeholder='Enter Email Address'
                value={data.confirmpassword}
                onChange={(e) =>
               setData((prev) => ({
             ...prev,
              [e.target.name]: e.target.value,
             }))
             }
              />
              </div>
              
              <button className='text-black text-medium font-medium bg-yellow-400 rounded-xl w-full  p-3' type='submit'>Reset Password</button>
           </form>
           <NavLink to={"/"} className='mt-3 flex flex-row items-center gap-2 text-white'><FaArrowLeft/> Back To Login</NavLink>
           </div>
      </div>
    </div>
  )
}

export default Password
