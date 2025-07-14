import React from 'react'
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../../ContextApi/Auth"
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md"
import { IoIosLogOut } from "react-icons/io";
import axios from 'axios';

const Bars = ({setBar}) => {
     const navigate =useNavigate();
    const [drop,setDrop] =useState(false);

     //context api data to handle ot log or not log with help of token
    const { data,isLog,setData,setLog,count} =useContext(AuthContext);

     //stores data to be shown at catalog
        const [cat,setCat]=useState([]); 


        useEffect(()=>{
      //at rendering already stores data for catalog
       const getcatdata=async()=>{
        try{
        const resp=await axios.get("https://localhost:3000/EduNova/Admin/showcategory",{
          withCredentials:true,
        })
        setCat(resp.data.category);
        // console.log(resp)
      }
      catch(error){
        console.log(error);
      }
       }
       getcatdata();
    },[])
   
     console.log(cat)

     const handleCategory=(name)=>{
       navigate(`/catalog/${name}`)
   }
     
     const handleLogout=async()=>{
      //handle logout by deleting token form cookie+setting context api data and log null and false that render the components 
      //where they are used
      //httponly so remove from backend call an api
        try {
    // console.log("Logout triggered");
    await axios.delete("https://localhost:3000/EduNova/User/logout", {
      withCredentials: true,
    });
    // console.log("Logout API success");
    setData(null);
    setLog(false);
    // localStorage.clear
    // navigate("/login");
  } catch (error) {
    console.error("Logout failed");
  }
    }

  return (
    <div className='text-white bg-yellow-950 w-2/3 absolute right-10 top-10 z-10 '>
      <div className='text-center border-b-2 border-white'>
        <p className='p-2'>Account</p>

        <div>
          {
            //if login show circle+dropdown
        isLog ?<div className='pl-10 flex flex-row gap-4 items-center p-2 bg-[#000814]'>
        {/* <div className='rounded-full'>user.</div> */}
        
        { data.accountType==="Student" &&
        <NavLink to={"/dashboard/cart"}><IoCartOutline className='text-2xl text-white'/></NavLink>
        }

        {/* //cart logic */}
        {count>0 && <p className='absolute text-yellow-400 font-medium left-14 top-16  text-[13px] rounded-full p-1'>{count}</p>
        }

        <img  onClick={() => navigate("/dashboard/profile")} className='cursor-pointer rounded-full h-8 w-8 border-2 border-white' src={`${data?.thumbnail}`}/>
        <div onClick={()=>setDrop(!drop)}><IoIosArrowDropdownCircle className='cursor-pointer text-gray-600 text-xl'/>
        
        {/* //handling dropdown here */}
        
        {drop ?  <div className='absolute z-10 rounded-xl left-8 p-2  top-20 bg-slate-700'>
          <NavLink to="/dashboard" className='flex items-center justify-around text-md p-1 text-white  flex-row gap-1'><MdOutlineDashboard className='text-white text-lg'/> DashBoard</NavLink>
          <div onClick={handleLogout} className='flex p-1 cursor-pointer justify-around flex-row items-center text-md text-white'><IoIosLogOut className='text-white text-lg'/> Logout</div>
        </div> :<div></div>}
        </div>
       </div> :
       //else show this simple login + singup
       <div className='flex flex-col z-20 items-center  lg:gap-5 gap-2 mt-2 mb-2'>
        <NavLink  className="bg-yellow-400 w-fit p-2 py-2 border-gray-400 border-[1px] rounded-xl text-black" to={"/login"}>Log in</NavLink>
        <NavLink  className="bg-yellow-400 w-fit py-2 p-2 border-gray-400 border-[1px] rounded-xl text-black" to={"/singup"}>Sing Up</NavLink>
       
       </div>
        
       }
       </div>
      </div>
      <div className='text-center border-b-2 border-white'>
          <p className='text-medium p-2 text-xl font-medium text-yellow-300'>Courses</p>
      
           {/* rendering catalog with help of ul and li and map functino  */}
          <ul className="   flex-col group-hover:block  bg-[#000814] text-black shadow-md rounded">
           {cat.map((ele, ind) => (
           <li
           //key pass karna jarrori he
           key={ind}
           onClick={()=>handleCategory(ele.name)}
        className="px-4 py-2 m-2 rounded-md text-white text-medium hover:bg-gray-900 cursor-pointer"
          >
        {ele.name}
          </li>
           ))}
          </ul>
      
      </div>

      <div className='flex flex-col gap-2 items-center'>
        <NavLink  to={"/About"}>About</NavLink>
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </div>
    </div>
  )
}

export default Bars
