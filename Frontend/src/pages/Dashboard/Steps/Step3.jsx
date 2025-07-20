import React from 'react'
import { NavLink } from 'react-router-dom'
import Stepprocess from '../Stepprocess'
import { useContext } from 'react';
import {AuthContext} from "../../../ContextApi/Auth"

const Step3 = () => {
   const {step,setStep}=useContext(AuthContext);
  return (
    <div>
     <Stepprocess/>
      <NavLink onClick={()=>setStep(1)} to="/">click</NavLink>
        
    </div>
  )
}

export default Step3
