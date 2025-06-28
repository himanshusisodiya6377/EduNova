import React from 'react'
import { useState } from 'react'
import Button from './Button'

const Contactform = ({heading,subheading}) => {
     const[data,setData]=useState({
        firstname:"",
      lastname:"",
      email:"",
      phone:"",
      message:""
    })
  return (
    <div>
         <form className=' flex flex-col gap-2 items-center bg-[#000814] border-2 border-gray-500 rounded-md'>
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
             <div className='w-[90%] mb-10'>
            <Button action={true} text={"Send Message"} width={true}/>
             </div>
            </form>
    </div>
  )
}

export default Contactform
