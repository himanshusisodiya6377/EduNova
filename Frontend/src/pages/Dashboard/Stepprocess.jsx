import React from 'react'
import { PiNumberOneBold } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import { useContext } from 'react';
import {AuthContext} from "../../ContextApi/Auth"
import { TbLineDotted } from "react-icons/tb";

const Stepprocess = () => {
 
    const{step}=useContext(AuthContext);

  return (
    <div className='flex flex-col gap-16 pb-10'>
    <p className='text-white text-3xl font-semibold '>
         Add Course
      </p>
      <div className='w-full flex flex-col gap-1'>
       <div className='flex items-center justify-between flex-row w-[90%] gap-2'>
       {step>1 ? <div className='bg-[#251400] text-yellow-500 px-1 p-1 rounded-full text-3xl border-[1px] border-yellow-500'><TiTick/></div> : <p className={step==1 ? "border-[1px] border-yellow-500 rounded-full px-4 p-2 bg-[#251400]": "rounded-full px-4 p-2 bg-[#161D29]" }>1</p> }
        <div className={step>1 ?"flex-1  border-t-2 border-dashed border-yellow-500":"flex-1 border-t-2 border-dashed border-gray-500"}></div>
       {step>2 ? <div className='bg-[#251400] text-yellow-500 px-1 p-1 rounded-full text-3xl border-[1px] border-yellow-500'><TiTick/></div> : <p className={step==2 ? "border-[1px] border-yellow-500 rounded-full px-4 p-2 bg-[#251400]": "rounded-full px-4 p-2 bg-[#161D29]"}>2</p> }
         <div className={step>2 ?"flex-1  border-t-2 border-dashed border-yellow-500":"flex-1 border-t-2 border-dashed border-gray-500"}></div>
       {step>3 ? <div className='bg-[#251400] text-yellow-500 px-1 p-1 rounded-full text-3xl border-[1px] border-yellow-500'><TiTick/></div> : <p className={step==3 ? "border-[1px] border-yellow-500 rounded-full px-4 p-2 bg-[#251400]": "rounded-full px-4 p-2 bg-[#161D29]"}>3</p> }
        {/* <p>Course Information</p> */}
      </div>
      <div className='flex flex-row font-medium justify-between text-sm w-[90%]'>
        <p className="text-white">Course Information</p>
        <p className={step>=2 ?"text-white mr-16" :"text-gray-600 mr-16"}>Course Builder</p>
        <p className={step<3 ? "text-gray-600" :  "text-white"}>Publish</p>
      </div>
      </div>
    </div>
  )
}

export default Stepprocess
