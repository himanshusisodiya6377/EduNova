import React from 'react'

const Heading = ({heading,subheading,curly}) => {
  return (
    <div className='md:w-[90%] mt-8'>
    <div className='font-bold text-white mb-4  text-3xl'>
    {/* heading    */}
      {heading}
    </div>
    <span className='text-lg text-gray-400 font-medium mt-4 mr-2'>
     {/* subheading */}
     {subheading}
    </span>
    <span className='text-[#47A5C5] font-bold italic'>
        {/* curly */}
        {curly}
    </span>
    </div>
  )
}

export default Heading
