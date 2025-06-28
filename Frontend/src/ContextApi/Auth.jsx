import axios from "axios";
import { createContext } from "react";
import { useState,useEffect } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
const [data,setData]=useState(null);
const [isLog,setLog]=useState(false);
//letting know form middleware auth whether user has token to login if have that is write 
//that i will set data and islog this will done for firsttime only intially
//but when user change data or isLOg it will render whole component expect useeffect
//and jha jha ye context api use kiya hoga wha bhi render ho jayega automatically
useEffect(()=>{
   const Authfun=async()=>{ 
     try{
     const res=await axios.get("http://localhost:3000/EduNova/User/verifyuser",{
        withCredentials:true,
     });
     setData(res.data.user);
     setLog(true);
     console.log(res.data);
  }
  catch(error){
    console.log(error);
      setData(null);
      setLog(false);
  }
}
Authfun();
},[]
)

return <AuthContext.Provider value={{data,isLog,setData,setLog}}>
    {children}
</AuthContext.Provider>
}


// export default AuthContext;