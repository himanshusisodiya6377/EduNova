import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"
import { useContext } from 'react'
import { AuthContext } from '../ContextApi/Auth'

const EnrolledCourses = () => {
 
   const {data}=useContext(AuthContext);
  
  // const[data,setData]=useState(null);

//  useEffect(async()=>{
//   try{
//     const course=await axios.get("http://localhost:3000/EduNova/Course/getallcourse");
//     if(course){
//       setData(course);
//       console.log(course);
//     }
//   } 
//   catch(error){
//     console.log(error);
//   }

//  },[])


  return (
    <div className='text-white'>
    <div>
     <p className='text-white text-3xl font-semibold '>Enrolled Courses</p>
    </div>
      {data.courses.length==0 ? 
      <div className='mt-16'>
        <p className='mx-auto w-fit'>You have not enrolled in any course yet.</p>
      </div>
      :
      <div className='flex gap-8 mt-16 mb-40 flex-col'>
       {data.courses.map((ele, id) => (
         <div className='flex p-6 rounded-xl bg-[#161D29] flex-row gap-6' key={id}>
         <img className='w-[20%] h-[20%] rounded-xl' src={ele.thumbnail} alt="Course Thumbnail" />
         <div className='flex flex-col'>
          <p className='font-bold text-xl'>{ele.courceName}</p>
          <p className='mt-2 text-gray-500 text-medium font-medium'>{ele.description}</p>
         </div>
         </div>
         ))}
      </div>
      }
    </div>
  )
}

export default EnrolledCourses
