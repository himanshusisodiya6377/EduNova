import React from 'react'
import { useState } from 'react'
import Button from './Button'
import axios from 'axios'
import { toast } from 'react-hot-toast';


const Contactform = ({heading,subheading,action}) => {
     const[data,setData]=useState({
        firstname:"",
      lastname:"",
      email:"",
      phone:"",
      message:""
    })

    const handleFrom=async(e)=>{
      try{  
        e.preventDefault();
        setData({
          firstname:"",
      lastname:"",
      email:"",
      phone:"",
      message:""
        })
      await axios.post("https://localhost:3000/EduNova/contactus",data,{
          withCredentials:true,
        })
          toast.success('Form submitted successfully!',{
            duration: 3000,
          });
      }
      catch(error){
        console.log(error);
        
      }
    }

  return (
    <div>
         <form onSubmit={handleFrom} className={` flex flex-col gap-2 items-center ${action ? "border-2 border-gray-500" : "" } bg-[#000814] rounded-md`}>
                <p className='text-white font-semibold text-4xl w-[90%] mt-10'>{heading}</p>
                <p className='font-medium text-gray-500 w-[90%]'>{subheading}</p>

          <div className='flex lg:flex-row flex-col gap-3 items-center mt-8 w-[90%]'>
          <div className='flex flex-col gap-2 lg:w-[48%] w-full'>
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

         <div className='flex flex-col gap-2 lg:w-[50%] w-full'>
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
            required
            value={data.lastname}
            onChange={(e) => setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
            }))}
          />
         </div>
          </div>
         
          <div className='flex flex-col gap-2 w-[90%] mt-3'>
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

         <div className='flex flex-col gap-2 mt-3 w-[90%]'>
          <label>
          <div className='flex gap-1'>
            <p className='text-white'>
             Phone Number
            </p>
            <span className='text-red-500'>*</span>
          </div>
          </label>
          <input
          className='p-2 w-full rounded-md bg-slate-700 text-white py-3 outline-none'
            type='phone'
            name='phone'
            placeholder='Enter Email Address'
            required
            value={data.phone}
            onChange={(e) => setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
            }))}
          />
         </div>

         
         <div className='flex mb-10 flex-col gap-2 mt-3 w-[90%] '>
          <label>
          <div className='flex gap-1'>
            <p className='text-white'>
             Message
            </p>
            <span className='text-red-500'>*</span>
          </div>
          </label>
          <textarea
          className='p-2 w-full min-h-[150px] rounded-md bg-slate-700 text-white py-3 outline-none'
            type='message'
            name='message'
            placeholder='Enter Email Address'
            required
            value={data.message}
            onChange={(e) => setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
            }))}
          />
         </div>  
             <button type="submit" className="mb-12 w-[90%] bg-[#FFD60A] p-2 rounded-md text-lg font-medium">
              {/* <Button action={true} text="Sign in" width={true} /> */}
             contact us
          </button>
            </form>
    </div>
  )
}

export default Contactform
