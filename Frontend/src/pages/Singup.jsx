import React from 'react'
import Heading from '../Component/Auth/Heading'
import Button from '../Component/Homepage/Button'
import singup from "../assets/Images/signup.webp"
import Image from '../Component/Auth/Image'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect } from 'react'
import axios from "axios";

const Singup = () => {
  //maintaing useState to update values in onject
   const[data,setData]=useState({
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      confirmpassword:""
     })
     //handling whether password be shown or not
   const[showpass1,setShowpass1]=useState(false)
  const[showpass2,setShowpass2]=useState(false)
 
  //toogle true for student
  const[role,setRole]=useState(true)
  
  //according first set student but when role changes it updated
   useEffect(() => {
  setData(prev => ({
    ...prev,
    accountType: role ? "Student" : "Instructor"
  }));
}, [role]); 

     const handleSubmit=async(event)=>{
         event.preventDefault();
         //sending data to backend
         try{
            const response=await axios.post("http://localhost:5173/EduNova/User/singup",{
              data},{
                //handling cookie
                withCredentials:true,
              });
              console.log(response);
         }
         catch(error){
          console.log(error);
         }
        
     }
  return (
    <div className='bg-[#000814] lg:h-screen  justify-between flex'>
      <div className='w-11/12 mx-auto bg-[#000814] gap-2 flex md:flex-row flex-col-reverse justify-between items-center'>
        <div className='flex flex-col lg:w-[40%] h-fit mb-8 md:w-[60%] w-[90%]'>
        {/* form */}
        <Heading heading={"Join the millions learning to code with StudyNotion for free"} subheading={"Build skills for today, tomorrow, and beyond."} curly={"Education to future-proof your career."}/>
          
        {/* toggle div */}
        <div className=' flex  bg-slate-700 rounded-full w-fit p-1 mt-6 items-center justify-between text-md cursor-pointer '>
          <div 
          className={role?"bg-[#000814] cursor-pointer rounded-full px-4 p-2 text-white":"text-gray-400 cursor-pointer rounded-full px-4 p-2"} onClick={()=>setRole(true)}>
            Student
          </div>
          
          <div className={role?"rounded-full px-4 p-2 text-gray-400 cursor-pointer":"bg-[#000814] text-white cursor-pointer rounded-full px-4 p-2"} onClick={()=>setRole(false)}>
            Instructor
          </div>
        </div>


         {/* form */}
         <form onSubmit={handleSubmit}>
         <div className='flex flex-col md:flex-row lg:flex-row gap-3 mt-3'>
          <div className='flex flex-col gap-2 lg:w-[50%]'>
          <label>
          <div className='flex gap-1'>
            <p className='text-white'>
             First Name
            </p>
            <span className='text-red-500'>*</span>
          </div>
          </label>
          <input
          className='p-2 rounded-md bg-slate-700 text-white py-3 outline-none'
            type='firstname'
            name='firstname'
            placeholder='Enter First Name'
            required
            value={data.firstname}
            onChange={(e) => setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
            }))}
          />
         </div>

         <div className='flex flex-col gap-2 lg:w-[50%]'>
          <label>
          <div className='flex gap-1'>
            <p className='text-white'>
             Last Name
            </p>
            <span className='text-red-500'>*</span>
          </div>
          </label>
          <input
          className='p-2 rounded-md bg-slate-700 text-white py-3 outline-none'
            type='lastname'
            name='lastname'
            placeholder='Enter Last Name'
              value={data.lastname}
            onChange={(e) => setData(prev => ({
            ...prev, required,
            [e.target.name]: e.target.value
            }))}
          />
         </div>
         </div>
         
         <div className='flex flex-col gap-2 mt-3'>
          <label>
          <div className='flex gap-1'>
            <p className='text-white'>
             Email Address
            </p>
            <span className='text-red-500'>*</span>
          </div>
          </label>
          <input
          className='p-2 w-full rounded-md bg-slate-700 text-white py-3 outline-none'
            type='email'
            name='email'
            placeholder='Enter Email Address'
            required
            value={data.email}
            onChange={(e) => setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
            }))}
          />
         </div>
          
         <div className='flex flex-col md:flex-row gap-3 mt-3' >
           <div className='flex flex-col gap-2 lg:w-[50%] relative'>
          <label>
          <div className='flex gap-1'>
            <p className='text-white'>
             Password
            </p>
            <span className='text-red-500'>*</span>
          </div>
          </label>
          <input
          className='p-2 rounded-md bg-slate-700 text-white py-3 outline-none'
            type={showpass1?"text":"password"}
            name='password'
            placeholder='Enter First Name'
            required
            value={data.creatpassword}
            onChange={(e) => setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
            }))}
          />
          <span className='absolute text-white right-3 translate-y-12 cursor-pointer'
          onClick={() => setShowpass1(!showpass1)}>
            {showpass1?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}
          </span>
         </div>

         <div className='flex flex-col gap-2 lg:w-[50%] relative'>
          <label>
          <div className='flex gap-1'>
            <p className='text-white'>
             Confirm Password
            </p>
            <span className='text-red-500'>*</span>
          </div>
          </label>
          <input
          className='p-2 rounded-md bg-slate-700 text-white py-3 outline-none'
            type={showpass2?"text":"password"}
            name='confirmpassword'
            placeholder='Enter First Name'
            required
            value={data.confirmpassword}
            onChange={(e) => setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
            }))}
          />
          {/* code to check whether eye has to be show or not/\ */}
          <span className='absolute text-white right-3 translate-y-12 cursor-pointer'
          onClick={() => setShowpass2(!showpass2)}>
            {showpass2?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}
          </span>
         </div>
          
         </div>
         <button type="submit"className="mt-12 w-full bg-[#FFD60A] p-2 rounded-md text-lg font-medium">
              {/* <Button action={true} text="Sign in" width={true} /> */}
              Creat Account
          </button>
        
         </form>
         
        </div>
        <div className='flex justify-end mt-8 h-fit'>
          {/* image */}
          <Image image={singup}/>
        </div>
      </div>
    </div>
  )
}

export default Singup
