import React from 'react'
import Image from "../../assets/Images/TimelineImage.png"


const PhotoOverlap = () => {
  return (
    <div className='lg:w-[50%] relative'>
     <img src={Image}/>
      <div className='flex md:flex-row flex-col md:gap-7  bg-[#014A32] text-white w-[90%] mx-auto border border-3 border-gray-700  shadow-xl  -translate-y-10'>
      <div className='flex flex-row md:border-r-2 border-b-2   border-green-700 md:w-[50%] w-full justify-around items-center md:p-6 p-3'>
       {/* firstsection */}
       <span className='font-bold md:text-4xl text-2xl'>10</span>
       <span className='text-medium '>Years experiences</span>
      </div>
      <div className='flex flex-row mb-3 md:w-[50%] w-full gap-2 justify-around p-3  items-center'>
        {/* secondsection */}
        <span className='font-bold md:text-4xl  text-2xl'>250</span>
       <span className='text-medium'>TYPES OF COURSES</span>
      </div>
      </div>
    </div>
  )
}

export default PhotoOverlap
