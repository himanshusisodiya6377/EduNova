import React from 'react'
import { PiNumberOneBold } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import { useContext } from 'react';
import {AuthContext} from "../../ContextApi/Auth"

const Stepprocess = () => {
 
    const{step}=useContext(AuthContext);

  return (
    <div>
      <div className='flex flex-col gap-2'>
      {step==1 ?  <p className='rounded-full'>1</p> : <div><TiTick/></div> }
       
        <p>Course Information</p>
      </div>
    </div>
  )
}

export default Stepprocess
