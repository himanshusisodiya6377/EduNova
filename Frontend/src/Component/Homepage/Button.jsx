import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Button = ({action,text,arrow}) => {
  return (
    <div className='w-fit '>
      <div className={`flex items-center justify-center gap-2 transition-all duration-200 hover:scale-95 p-2 px-4 cursor-pointer rounded-md font-semibold ${action ? "text-black bg-yellow-400":"text-white bg-gray-500"}`}>
        {text}
        {arrow && <FaArrowRight />}
      </div>
    </div>
  )
}

export default Button
