import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../ContextApi/Auth'
import { FiUploadCloud } from "react-icons/fi";

const Photochange = () => {
      const {data}=useContext(AuthContext);
  return (
    <div className='flex flex-row gap-5 mt-16 bg-[#161D29] p-8 rounded-xl'>
       <img className='w-16 h-16 border border-1 border-white rounded-full' src={data.thumbnail}/>
        <div className='flex flex-col gap-4 '>
          <p className='text-white text-medium font-medium'>Change Profile Picture</p>
          <div className='flex flex-row items-center '>
            <input className='text-white' type='file'/>

            <button className='text-black flex flex-row gap-1 items-center p-2 rounded-md font-semibold bg-yellow-300'><FiUploadCloud/> Upload</button>
          </div>
        </div>
    </div>
  )
}

export default Photochange
