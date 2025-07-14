import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Button from '../Component/Homepage/Button';
import { useContext } from 'react';
import { AuthContext } from '../ContextApi/Auth';
import { useNavigate } from 'react-router-dom';

const Course = () => {
     const {push,isLog}=useContext(AuthContext);
     const {id}=useParams();
    const [Data,setData]=useState(null);
    const navigate=useNavigate();
    const API_BASE = import.meta.env.VITE_BACKEND_URL;
     
    const handleCart=async(id)=>{
      isLog? push(Data): navigate("/login")
    }
    
    useEffect(() => {
  const fetchData = async () => {
    try {
      //here we usig params logic as sending id to backend api there we fetch using req.params.id
      const course = await axios.get(`${API_BASE}/EduNova/Course/getoneCourse/${id}`);
      if (course.data.course) {
        setData(course.data.course);
      }
    } catch (error) {
      console.log(error);
    }
  };

 //here is also important to pass the id 
    fetchData(id);
  
}, []);
 
      //  console.log(isLog)

  return (
    <div className='text-black bg-[#000814]'>
       <div className='flex min-h-screen flex-row gap-4 bg-[#000814] mx-auto w-11/12'>
        {/* //first section */}
        <div className='w-2/3 text-white mt-16 bg-[#000814]'>
           <p>{Data?.courceName}</p>
           <p>{Data?.description}</p>
        </div>
        {/* second section */}
       <div className='bg-[#2c333f] mb-16 rounded-xl mt-16 w-1/3'>
        <img src={Data?.thumbnail} className='p-4 rounded-xl'/>
        <p className='text-4xl font-medium text-white ml-4'>Rs. {Data?.price}</p>
      
        <div className='flex flex-col gap-4 w-11/12 mx-auto mt-5'>
          <Button action={true} width={true} text={"Buy Now"}/>
         <button className='bg-blue-900 p-3 rounded-xl' onClick={()=>handleCart(Data)}>Add to Cart</button>
        </div>
       </div>
       </div>
    </div>
  )
}

export default Course
