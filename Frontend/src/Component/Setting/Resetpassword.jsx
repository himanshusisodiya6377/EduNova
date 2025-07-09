import React from 'react'
import { useContext,useState } from 'react'
import { AuthContext } from '../../ContextApi/Auth'

const Resetpassword = () => {
     const {data}=useContext(AuthContext)
        const [user,setUser]=useState({
           current:"",
           new:""
        })
  return (
    <div className='flex flex-col p-6 bg-[#161D29] mb-32 rounded-xl'>
       <p className='text-medium text-xl text-white font-semibold'>Password</p>
       <form className='flex flex-col gap-4 justify-between mt-4 w-full'>
          <div  className='flex flex-row gap-4 justify-between w-full'>
             <div className='flex flex-col gap-2 w-[46%]'>
            <label className='text-white font-medium text-medium'>Current Password</label>
            <input
            className='bg-[#2c333f] focus:outline-none p-2 rounded-md text-white border-b-2 border-gray-500'
             name='current'
              type='password'
              placeholder='Enter Current Password'
              value={user.firstname} 
             onChange={(e) =>
             setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
            }))
            }
            />
         </div>

           <div className='flex flex-col gap-2 w-[46%]'>
            <label className='text-white font-medium text-medium'>New Password</label>
            <input
            className='bg-[#2c333f] focus:outline-none p-2 rounded-md text-white border-b-2 border-gray-500'
             name='new'
              placeholder='Enter New Password'
              type='paswword'
              value={user.firstname} 
             onChange={(e) =>
             setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
            }))
            }
            />
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

export default Resetpassword
