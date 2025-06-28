import React, { useState,useEffect} from 'react'
import { SiSpacemacs } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import Button from '../Homepage/Button';
import './Navbar.css'
import { FaBars } from "react-icons/fa";
import {AuthContext} from "../../ContextApi/Auth"
import { useContext } from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md"
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  //context aspi data to handle ot log or not log with help of token
    const { data,isLog,setData,setLog } =useContext(AuthContext);
    //help in drop menu dashboard+logout
    const [drop,setDrop] =useState(false);
    //stores data to be shown at catalog
    const [cat,setCat]=useState([]); 


    //help to navigate to particulare path
    const navigate =useNavigate();

    useEffect(()=>{
      //at rendering already stores data for catalog
       const getcatdata=async()=>{
        try{
        const resp=await axios.get("http://localhost:3000/EduNova/Admin/showcategory",{
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

    const handleLogout=async()=>{
      //handle logout by deleting token form cookie+setting context api data and log null and false that render the components 
      //where they are used
      //httponly so remove from backend call an api
        try {
    console.log("Logout triggered");
    await axios.delete("http://localhost:3000/EduNova/User/logout", {
      withCredentials: true,
    });
    console.log("Logout API success");
    setData(null);
    setLog(false);
    // navigate("/login");
  } catch (error) {
    console.error("Logout failed");
  }
    }
  // const token=document.cookie;
  // if(token) console.log(hi);
  return (
    <div className='bg-[#161D29]'>
      <div className='w-11/12 bg-[#161D29] lg:h-14 h-12 mx-auto flex flex-row justify-between items-center'>
       {/* logo+name */}
       <div className='flex flex-row gap-3'>
       <SiSpacemacs className='text-white lg:text-3xl text-2xl'/>
       <p className='font-bold lg:text-2xl text-xl text-white'>EduNova</p>
       </div>

       {/* Routes */}
       <div id="navcat" className='text-gray-300 flex lg:text-lg text-md  flex-row lg:gap-8 gap-3 font-medium'>
         <NavLink to={"/"}>Home</NavLink>
         {/* div to get link+catalog */}
         <div  className="group relative">
         <NavLink to={"/Catalog"}>Catalog</NavLink>
         {/* rendering catalog with help of ul and li and map functino  */}
          <ul className="absolute hidden  flex-col group-hover:block top-full left-46 w-[350%] bg-white text-black shadow-md rounded z-10">
           {cat.map((ele, ind) => (
           <li
           //key pass karna jarrori he
           key={ind}
        className="px-4 py-2 m-2 rounded-md text-black text-medium hover:bg-gray-400 cursor-pointer"
          >
        {ele.name}
        </li>
         ))}
        </ul>
         </div>
         <NavLink  to={"/About"}>About</NavLink>
         <NavLink to={"/contact"}>Contact Us</NavLink>
       </div>

       {/* login+singup */}
       <div>
          {
            //if login show circle+dropdown
        isLog ?<div className='relative flex flex-row gap-3 items-center p-2 bg-slate-600'>
        {/* <div className='rounded-full'>user.</div> */}
        <img  onClick={() => navigate("/")} className='cursor-pointer rounded-full h-8 w-8 border-2 border-white' src={`${data?.thumbnail}`}/>
        <div onClick={()=>setDrop(!drop)}><FaAngleDoubleDown className='cursor-pointer text-white text-xl'/>
        {/* //handling dropdown here */}
        {drop ?  <div className='absolute z-10 -left-8 -bottom-14 bg-slate-700'>
          <div className='flex items-center justify-around border-b-2 border-gray-400 p-1 text-white text-sm flex-row gap-1'><MdOutlineDashboard className='text-white'/> DashBoard</div>
          <div onClick={handleLogout} className='flex p-1 cursor-pointer justify-around flex-row items-center text-sm text-white'><IoIosLogOut/> Logout</div>
        </div> :<div></div>}
        </div>
       </div> :
       //else show this simple login + singup
       <div id="navlog" className='flex flex-row  lg:gap-5 gap-2 mt-2 mb-2'>
        <Button path={"/login"} action={false} text={"Log in"}/>
        <Button path={"/singup"} action={false} text={"Sign Up"}/>
       </div>
        
       }
       </div>
       {/* bar */}
       <FaBars id='navbar' className='texl-3xl text-white' />
      </div>
    </div>
  )
}

export default Navbar
