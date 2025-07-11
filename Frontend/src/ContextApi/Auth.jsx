import axios from "axios";
import { createContext } from "react";
import { useState,useEffect } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
const [data,setData]=useState(null);
const [isLog,setLog]=useState(false);
const[count,setCount]=useState(0);
const [price,setPrice]=useState(0);
//letting know form middleware auth whether user has token to login if have that is write 
//that i will set data and islog this will done for firsttime only intially
//but when user change data or isLOg it will render whole component expect useeffect
//and jha jha ye context api use kiya hoga wha bhi render ho jayega automatically

   
useEffect(() => {
    // Initialize count from localStorage
    const data = JSON.parse(localStorage.getItem("data")) || [];
    setCount(data.length);
  }, []);

//logic to push course in localstorage object
const push = (ele) => {
  const existingArray = JSON.parse(localStorage.getItem("data")) || [];
  // console.log(ele)
  // console.log("yes")
  // Check if object with same _id already exists
  //it will iterate to all and check same id object
  //we cant compare object directly
  const exists = existingArray.some(item => item._id === ele._id);

  if (!exists) {
    //if object doesnt exist 
    existingArray.push(ele); // push the full object
   setPrice(prev => prev + ele.price);
    localStorage.setItem("data", JSON.stringify(existingArray));
    setCount(existingArray.length);
  }
};

  const pull = (id) => {
    const existingArray = JSON.parse(localStorage.getItem("data")) || [];

         //we cant compare object directly
      const updated = existingArray.filter(item => item._id !== id._id);
     setPrice(prev => prev - id.price);
      localStorage.setItem("data", JSON.stringify(updated));
      setCount(updated.length);
    
  };

useEffect(()=>{  
   const Authfun=async()=>{ 
     try{
     const res=await axios.get("http://localhost:3000/EduNova/User/verifyuser",{
        withCredentials:true,
     });
     setData(res.data.user);
     setLog(true);
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

return <AuthContext.Provider value={{data,isLog,setData,setLog,count,push,pull,price}}>
    {children}
</AuthContext.Provider>
}


// export default AuthContext;