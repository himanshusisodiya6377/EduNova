import React from 'react'
import Button from './Homepage/Button'
import { FaArrowRight } from "react-icons/fa";

const TextImage = ({heading,subheading,Image,text1,text2,position}) => {
  return (
    <div className={`flex ${position}`}>
    <div className={`flex flex-col gap-4 item-center mx-auto w-1/2 mt-16`}>
      {/* text */}
      <div>
        {/* heading// */}
        <div className=' text-white font-medium text-4xl'>
            {heading}
        </div>
      </div>
       <div className='text-gray-400 text-medium text-medium'>
        {/* subheading */}
        {subheading}
       </div>
      <div className='flex flex-row gap-3 mt-6'>
        {/* button */}
        <Button action={true} text={text1} arrow={true}/>
        <Button action={false} text={text2} arrow={false}/>
      </div>
      {/* photo */}
    </div>
      <div className='w-[550px] mt-16 mx-auto'>
      <img src={Image} />
      </div>
    </div>
  )
}

export default TextImage
