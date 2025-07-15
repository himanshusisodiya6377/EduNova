import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Catalog = () => {
  
  const [Data,setData]=useState([]);
  const {category}=useParams();
  const navigate=useNavigate();
  const API_BASE = import.meta.env.VITE_BACKEND_URL;
  
  const handleclick=(id)=>{
      navigate(`/courses/${id}`)
  }

 useEffect(() => {
    const fetchData = async () => {
      try {
        const course = await axios.get(`${API_BASE}EduNova/Course/getallcourse`);
        
        // console.log(course)
         if(course){
          setData(course.data.courses);
         }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
   <div className='bg-[#161D29] flex flex-col lg:w-screen min-h-screen p-6'>
        <p className='font-medium text-md text-gray-500' >Home / Catalog /<span className='text-[#ffe83d] ml-1 font-medim tetx-md'>{category} </span></p>
        <p className='text-white mt-5 font-medium text-medium text-4xl'>{category}</p>
       <div className='flex md:flex-row flex-col gap-4 justify-around mt-16'>
        {Data.map((ele, id) =>
          ele.category.name === category ? (
            <div onClick={()=>handleclick(ele._id)} className='flex flex-col lg:w-[40%] w-[90%] gap-2' key={id}>
              <img   src={ele.thumbnail}/>
              <p className='text-white font-semibold text-xl'>{ele.description}</p>
              <p  className='text-[#ffe83d] font-semibold text-xl'>Rs. {ele.price}</p>
            </div>
          ):null
        )
      }
      </div>
       
    </div>
  )
}

export default Catalog
