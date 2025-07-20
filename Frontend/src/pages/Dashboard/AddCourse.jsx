import React from 'react'
import { AiFillThunderbolt } from "react-icons/ai";
import { Outlet } from 'react-router-dom';

export default function AddCourse() {
  return (
    <div>
      <div className=' flex flex-row gap-2 text-white'>
        <div className='w-[60%]'>
         {/* //outlet */}
         <Outlet/>
        </div>
        <div className='bg-[#161D29] h-[55%] p-6 rounded-xl w-[45%]'>
         {/* //message */}
         {/* //heading */}
         <div className='flex flex-row gap-2 items-center text-white'>
            <AiFillThunderbolt className='text-yellow-400'/>
            <p className='text-xl'>Course Upload Tips</p>
         </div>
         <ul className='text-white list-disc marker:text-white text-sm flex flex-col gap-2 mt-8'>
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Course Builder is where you create & organize a course.</li>
            <li>Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
            <li>Information from the Additional Data section shows up on the course single page.</li>
            <li>Make Announcements to notify any important</li>
            <li>Notes to all enrolled students at once.</li>
         </ul>
         
        </div>
      </div>
    </div>
  )
}
