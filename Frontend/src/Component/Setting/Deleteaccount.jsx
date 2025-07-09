import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

const Deleteaccount = () => {
  return (
    <div className='text-white p-6 bg-[#340019] mb-32 rounded-xl flex flex-row gap-4'>
      
      <div className='bg-[#691432] rounded-full items-center h-fit p-3'>
      <RiDeleteBinLine className='text-4xl text-[#ef476f]'/>
      </div>
      <div>
        <p className='text-medium font-bold'>Delete Account</p>
        <p className='mt-2 text-[#f6c2cd]'>Would you like to delete account?<br/>
          This account may contain Paid Courses. Deleting your account is permanent and will remove all the contain associated with it.</p>
        <p className=' text-[#8a2141] italic mt-1'>I want to delete my account</p>
      </div>
    </div>
  )
}

export default Deleteaccount
