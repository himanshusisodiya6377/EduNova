import React from 'react'
import Heading from '../Component/Auth/Heading'
import Button from '../Component/Homepage/Button'
import Image from '../Component/Auth/Image'
import login from "../assets/Images/login.webp"
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import {AuthContext} from "../ContextApi/Auth"
import { useNavigate } from 'react-router-dom'

//page for login and singup 
const Login = () => {
   const API_BASE = import.meta.env.VITE_BACKEND_URL;
    const { data,isLog,setData,setLog } =useContext(AuthContext);
    const navigate=useNavigate();
   const[data1,setData1]=useState({
    email:"",
    password:""
   })
   const[showpass,setShowpass]=useState(false)

   const handleSubmit=async(event)=>{
      event.preventDefault();
     try{
      //sending data to backend using axios
          const response=await axios.post(`{API_BASE}/EduNova/User/login`,data1,{withCredentials:true,});
          setData(response.data.user);
          setLog(true);
          navigate("/dashboard");
          setData1({
            email:"",
            password:""
          })
     }
     catch(error){
      console.log(error);
      setData(null);
          setLog(false);
     }
    // baki code idr hoga
   }

  //  console.log(data)

  return (
    <div className='bg-[#000814]'>
      <div className='w-11/12 mx-auto h-fit bg-[#000814]  md:h-screen flex md:flex-row flex-col-reverse items-center justify-between '>
        <div className='flex flex-col lg:w-[40%] md:w-[70%] mb-12 mt-16 '>
            {/* form */}
          <Heading heading={"Welcome Back"} subheading={"Build skills for today, tomorrow, and beyond."} curly={"Education to future-proof your career."} />
           <form className='flex  flex-col gap-3' onSubmit={handleSubmit} >

           {/* email */}
           <div className='w-full flex flex-col gap-2 mt-5'>
            <label className='flex flex-col'>
           <div className='flex gap-1'>
            <p className='text-white'>Email Address</p>
            <span className='text-red-500'>*</span>
           </div>
            </label>
            <input 
            className='p-3 text-white rounded-md bg-slate-700 py-3 outline-none'
            name="email"
            value={data1.email}
            required
            placeholder="Enter email address"
            type="email"
             onChange={(e) => setData1(prev => ({
            ...prev,
            [e.target.name]: e.target.value
            }))}
            /> 
            
           </div>
          
         {/* password */}
         <div className='w-full flex flex-col gap-2 relative'>
          <label>
            <div className='flex gap-1'>
            <p className='text-white'>Password</p>
            <span className='text-red-500'>*</span>
            </div>
             </label>
            <input 
            className='p-3 rounded-md bg-slate-700 text-white py-3 outline-none'
            //help in unique identification
            name="password"
            //showing value jo padi hogi
            value={data1.password}
            required
            placeholder="Enter Password"
            //for whether is to show pasword or not
            type={showpass ?"text" :"password"}
           onChange={(e) => setData1(prev => ({
            ...prev,
           [e.target.name]: e.target.value
            }))}
         />   
         <span className="absolute right-3 translate-y-12  text-xl cursor-pointer text-gray-400"
           onClick={() => setShowpass(!showpass)}>
          {showpass?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}
         </span>
         <NavLink to={"/resetpassword"}  className='text-blue-400 text-sm absolute right-3 translate-y-20'>Forgot Password</NavLink>
        
         </div>
           <button type="submit" className="mt-12 bg-[#FFD60A] p-2 rounded-md text-lg font-medium">
              {/* <Button action={true} text="Sign in" width={true} /> */}
              sign in 
           </button>
        </form>
          
        </div>
        <div className='flex justify-end mt-8'>
           <Image image={login} />
        </div>
      </div>
    </div>
  )
}

export default Login
