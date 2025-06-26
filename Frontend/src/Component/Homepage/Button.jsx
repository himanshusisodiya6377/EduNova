import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Button = ({action,text,arrow}) => {
  return (
    <div className='w-fit'>
      <NavLink className={`flex items-center lg:p-3  justify-center gap-2 transition-all duration-200 hover:scale-95 p-2 px-4 cursor-pointer rounded-md font-bold ${action ? "text-black bg-yellow-400":"text-white bg-gray-500"}`}>
        {text}
        {arrow && <FaArrowRight />}
      </NavLink>
    </div>
  )
}

export default Button
