import React, { useState } from 'react'
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaEarthAfrica } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import Contactform from '../Component/Homepage/Contactform';

const ContactUs = () => {
   //simple contact form

  return (
    <div className='bg-[#000814] min-h-screen '>
      <div className='w-11/12 bg-[#000814] pt-24 pb-24 flex gap-10 lg:flex-row flex-col mx-auto items-start justify-between'>
          {/* left side information */}
         <div className='lg:w-[40%] w-full  flex flex-col gap-12 bg-[#161D29] text-white p-8 rounded-md'>
          <div className='flex flex-col'>
          <div className='flex flex-row items-center gap-1'>
            <IoChatbubblesOutline className='text-gray-400 text-2xl'
            />
            <p className='text-xl font-semibold'>Chat on us</p>
          </div>
            <p className='text-gray-400'>Our friendly team is here to help.<br/> info@studynotion.com</p>          
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-row items-center gap-2'>
                <FaEarthAfrica/>
                <p className='text-xl font-semibold'>Visit us</p>
            </div>
            <p className='text-gray-400'>Come and say hello at our office HQ.Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
          </div>
          <div className='flex flex-col gap-1'>
             <div className='flex flex-row items-center gap-2'>
               <IoIosCall/>
                <p className='text-xl font-semibold'>Call us</p>
             </div>
             <p className='text-gray-400'>Mon - Fri From 8am to 5pm <br/> +123 456 7869</p>
          </div>
         </div>
         {/* form */}
         <div className='lg:w-[55%] w-full'>
          <Contactform heading={"Got a Idea? We've got the skills. Let's team up"} subheading={"Tell us more about yourself and what you're got in mind."}/>
         </div>
      </div>
    </div>
  )
}

export default ContactUs
