import React from 'react'
import { useContext } from 'react'
import {AuthContext} from "../ContextApi/Auth"
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {isLog,data}=useContext(AuthContext);
      // console.log(isLog)
      // console.log(data)
  return isLog?children: <Navigate to="/"/>;
}

export default PrivateRoute
