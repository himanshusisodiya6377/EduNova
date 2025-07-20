import React, { useState, useContext ,useEffect} from 'react';
import Stepprocess from '../Stepprocess';
import { AuthContext } from '../../../ContextApi/Auth';
import axios from 'axios';

const Step1 = () => {
  const API_BASE = import.meta.env.VITE_BACKEND_URL;
     
  const [data, setData] = useState({
    courceName: "",
    description: "",
    price: null,
    category: "",
    tags: [],
    thumbnail: "",
    BenefitofCourse: "",
    Instructions: []
  });
  
   const [cat,setCat]=useState([]); 
  const { step, setStep } = useContext(AuthContext);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(data);
    // add your logic here
  };


   useEffect(()=>{
      //at rendering already stores data for catalog
       const getcatdata=async()=>{
        try{
        const resp=await axios.get(`${API_BASE}/EduNova/Admin/showcategory`,{
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

  return (
    <div>
      <div>
        <Stepprocess />

        <form
          className="flex bg-[#161d2e] p-5 rounded-xl flex-col gap-3"
          onSubmit={handleForm}
        >
          {/* Course Title */}
          <div className="w-full flex flex-col gap-2 mt-5">
            <label className="flex flex-col">
              <div className="flex gap-1">
                <p className="text-white">Course Title</p>
                <span className="text-red-500">*</span>
              </div>
            </label>
            <input
              className="p-3 text-white rounded-md border-b-2 border-gray-400 bg-slate-700 py-3 outline-none"
              name="courceName"
              value={data.courceName}
              required
              placeholder="Enter Course Title"
              type="text"
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value
                }))
              }
            />
          </div>

          {/* Course Description */}
          <div className="w-full flex flex-col gap-2 mt-5">
            <label className="flex flex-col">
              <div className="flex gap-1">
                <p className="text-white">Course Short Description</p>
                <span className="text-red-500">*</span>
              </div>
            </label>
            <textarea
              className="p-3 text-white rounded-md border-b-2 border-gray-400 bg-slate-700 py-3 outline-none h-32 resize-none"
              name="description"
              value={data.description}
              required
              placeholder="Enter a short description of the course"
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value
                }))
              }
            />
          </div>

           <div className="w-full flex flex-col gap-2 mt-5">
            <label className="flex flex-col">
              <div className="flex gap-1">
                <p className="text-white">Course Price</p>
                <span className="text-red-500">*</span>
              </div>
            </label>
            <input
              className="p-3 text-white rounded-md border-b-2 border-gray-400 bg-slate-700 py-3 outline-none"
              name="price"
              value={data.price}
              required
              placeholder="Enter Course Title"
              type="text"
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  [e.target.price]: e.target.value
                }))
              }
            />
          </div>

           <div className="w-full flex flex-col gap-2 mt-5">
            <label className="flex flex-col">
              <div className="flex gap-1">
                <p className="text-white">Course Category</p>
                <span className="text-red-500">*</span>
              </div>
            </label>
            <select
              className="p-3 text-white rounded-md border-b-2 border-gray-400 bg-slate-700 py-3 outline-none"
              name="category"
              value={data.category}
              required
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  [e.target.category]: e.target.value
                }))
              }
            >
            {
              cat.map((ele,idx)=>{
                <option key={idx}>{ele.name}</option>
              })
            }
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;
