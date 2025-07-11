import React, { useState,useEffect} from 'react'
import { SiSpacemacs } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import Button from '../Homepage/Button';
import './Navbar.css'
import { FaBars } from "react-icons/fa";
import {AuthContext} from "../../ContextApi/Auth"
import { useContext } from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md"
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
  //context api data to handle ot log or not log with help of token
    const { data,isLog,setData,setLog,count} =useContext(AuthContext);
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
        const resp=await axios.get(`${process.env.REACT_APP_SERVER_URL}/EduNova/Admin/showcategory`,{
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
    // console.log(data)

    const handleLogout=async()=>{
      //handle logout by deleting token form cookie+setting context api data and log null and false that render the components 
      //where they are used
      //httponly so remove from backend call an api
        try {
    // console.log("Logout triggered");
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/EduNova/User/logout`, {
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

   const handleCategory=(name)=>{
       navigate(`/catalog/${name}`)
   }

  // const token=document.cookie;
  // if(token) console.log(hi);
  return (
    <div className='bg-[#000814]'>
      <div className='w-11/12 bg-[#000814] lg:h-14 h-12 mx-auto flex flex-row justify-between items-center'>
       {/* logo+name */}
       <NavLink to={"/"} className='flex flex-row gap-3'>
       <SiSpacemacs className='text-white lg:text-3xl text-2xl'/>
       <p className='font-bold lg:text-2xl text-xl text-white'>EduNova</p>
       </NavLink>

       {/* Routes */}
       <div id="navcat" className='text-gray-300 flex lg:text-lg text-md  flex-row lg:gap-8 gap-3 '>
         <NavLink to={"/"}>Home</NavLink>
         {/* div to get link+catalog */}
         <div  className="group relative">
         <NavLink className="flex flex-row items-center gap-1">Catalog <IoIosArrowDown/></NavLink>
         {/* rendering catalog with help of ul and li and map functino  */}
          <ul className="absolute hidden  flex-col group-hover:block top-full left-46 w-[350%] bg-white text-black shadow-md rounded z-10">
           {cat.map((ele, ind) => (
           <li
           //key pass karna jarrori he
           key={ind}
           onClick={()=>handleCategory(ele.name)}
        className="px-4 py-2 m-2 rounded-md text-black text-medium hover:bg-[#c5c7d4] cursor-pointer"
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
        isLog ?<div className='relative flex flex-row gap-4 items-center p-2 bg-[#000812]'>
        {/* <div className='rounded-full'>user.</div> */}
        
        { data.accountType==="Student" &&
        <NavLink to={"/dashboard/cart"}><IoCartOutline className='text-2xl text-white'/></NavLink>
        }

        {/* //cart logic */}
        {count>0 && <p className='absolute text-yellow-400 font-medium left-6 -bottom-1 text-[13px] rounded-full p-1'>{count}</p>
        }

        <img  onClick={() => navigate("/dashboard/profile")} className='cursor-pointer rounded-full h-8 w-8 border-2 border-white' src={`${data?.thumbnail}`}/>
        <div onClick={()=>setDrop(!drop)}><IoIosArrowDropdownCircle className='cursor-pointer text-gray-600 text-xl'/>
        
        {/* //handling dropdown here */}
        
        {drop ?  <div className='absolute z-10 rounded-xl -left-1 p-2  -bottom-20 bg-slate-700'>
          <NavLink to="/dashboard" className='flex items-center justify-around text-md p-1 text-white  flex-row gap-1'><MdOutlineDashboard className='text-white text-lg'/> DashBoard</NavLink>
          <div onClick={handleLogout} className='flex p-1 cursor-pointer justify-around flex-row items-center text-md text-white'><IoIosLogOut className='text-white text-lg'/> Logout</div>
        </div> :<div></div>}
        </div>
       </div> :
       //else show this simple login + singup
       <div id="navlog" className='flex flex-row  lg:gap-5 gap-2 mt-2 mb-2'>
        <NavLink className="bg-[#161D29] p-3 border-gray-400 border-[1px] rounded-xl text-gray-400" to={"/login"}>Log in</NavLink>
        <NavLink className="bg-[#161D29] p-3 border-gray-400 border-[1px] rounded-xl text-gray-400" to={"/singup"}>Sing Up</NavLink>
       
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
