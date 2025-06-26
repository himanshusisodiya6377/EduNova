import React from 'react'
import Button from "../Homepage/Button"
import { FaArrowRight } from "react-icons/fa";

const TextImage = ({heading,subheading,Image,text1,text2,position}) => {
  return (
    <div className={`flex flex-col md:flex-col ${position ? `lg:flex-row`: `lg:flex-row-reverse`} justify-around`}>
    <div className={`flex flex-col gap-4 lg:w-1/2 md:w-full mt-16`}>
      {/* text */}
      <div>
        {/* heading// */}
        <div className=' text-white font-medium lg:w-[90%] md:w-full text-4xl '>
            {heading}
        </div>
      </div>
       <div className='text-gray-400 text-xl '>
        {/* subheading */}
        {subheading}
       </div>
      <div className='flex flex-row gap-3 mt-6 '>
        {/* button */}
        <Button action={true} text={text1} arrow={true}/>
        <Button action={false} text={text2} arrow={false}/>
      </div>
      {/* photo */}
    </div>
      <div className='lg:w-[550px] md:w-full md:object-cover mt-16'>
      <img src={Image} />
      </div>
    </div>
  )
}

export default TextImage
