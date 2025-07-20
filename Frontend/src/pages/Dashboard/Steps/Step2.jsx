import React from 'react'
import { NavLink } from 'react-router-dom'
import Stepprocess from '../Stepprocess'
import { useContext } from 'react';
import {AuthContext} from "../../../ContextApi/Auth"

const Step2 = () => {
    const {step,setStep}=useContext(AuthContext);
  return (
    <div>
       <Stepprocess/>
      <NavLink  onClick={()=>setStep((prev)=>(prev+1))} to="step3">click</NavLink>
         
    </div>
  )
}

export default Step2
