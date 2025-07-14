import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../ContextApi/Auth'

const ProfileInformation = () => {
    const {data}=useContext(AuthContext)
    const [user,setUser]=useState({
        firstname:data.firstname,
        lastname:data.lastname,
        DOB:"dd-mm-yy",
        phone:"",
        about:""
    })
  
    return (
    <div className='flex flex-col gap-4 w-full mb-16 bg-[#161D29] mt-10 p-6 rounded-xl'>
       <p className='text-medium text-xl text-white font-semibold'>Profile Information</p>
       <form className='flex flex-col gap-10 w-full'>
       {/* //first section of form */}
       <div className='flex md:flex-row flex-col w-full justify-between gap-4'>
        
        <div className='flex flex-col gap-4 md:w-[46%]'>
         <div className='flex flex-col gap-2'>
            <label className='text-white font-medium text-medium'>First Name</label>
            <input
            className='bg-[#2c333f] focus:outline-none p-2 rounded-md text-white border-b-2 border-gray-500'
             name='firstname'
              type='text'
              value={user.firstname} 
             onChange={(e) =>
             setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
            }))
            }
            />
         </div>

         <div className='flex flex-col gap-2'>
            <label className='text-white font-medium text-medium'>Date of Birth</label>
            <input
            className='bg-[#2c333f] focus:outline-none p-2 rounded-md text-white border-b-2 border-gray-500'
             name='DOB'
              type='date'
              value={user.DOB} 
             onChange={(e) =>
             setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
            }))
            }
            />
         </div>
         

         <div className='flex flex-col gap-2'>
              <label className='text-white font-medium text-medium'>Contact Number
            </label>
            <input
            className='bg-[#2c333f] focus:outline-none p-2 rounded-md text-white border-b-2 border-gray-500'
             name='phone'
              type='text'
              placeholder='Enter Contact Number'
              value={user.phone} 
             onChange={(e) =>
             setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
            }))
            }
            />
         </div>
        </div>
        {/* //first section of form */}
        <div  className='flex flex-col gap-4 md:w-[46%]'>


          <div className='flex flex-col gap-2'>
            <label className='text-white font-medium text-medium'>Last Name</label>
            <input
            className='bg-[#2c333f] focus:outline-none p-2 rounded-md text-white border-b-2 border-gray-500'
             name='lastname'
              type='text'
              value={user.lastname} 
             onChange={(e) =>
             setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
            }))
            }
            />
         </div>

           <div className='flex flex-col gap-2'>
            <label className='text-white font-medium text-medium'>Gender</label>
            <select
            className='bg-[#2c333f] focus:outline-none p-2 rounded-md text-white border-b-2 border-gray-500'
             name='gender'
              type='text'
              value={user.gender} 
             onChange={(e) =>
             setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
            }))
            }
            >
                 <option value="">-- Choose --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Other</option>
            </select>
         </div>
        

         <div className='flex flex-col gap-2'>
            <label className='text-white font-medium text-medium'>About</label>
            <input
            className='bg-[#2c333f] focus:outline-none p-2 rounded-md text-white border-b-2 border-gray-500'
             name='about'
              type='text'
              value={user.about} 
             onChange={(e) =>
             setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
            }))
            }
            />
         </div>
         
        </div>

       </div>
        
        {/* //buttons */}
        <div className='flex flex-row gap-4  justify-end'>
            <button className='text-white font-semibold p-2 rounded-xl bg-gray-500'>Cancle</button>
            <button className='text-black rounded-md font-semibold bg-yellow-400 p-2 '>Save</button>
        </div>
       </form>
    </div>
  )
}

export default ProfileInformation
