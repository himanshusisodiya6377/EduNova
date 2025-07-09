import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../ContextApi/Auth'
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const{count,pull,price}=useContext(AuthContext)

 
   
  const data=JSON.parse(localStorage.getItem("data"));
  // console.log(data)
 
  const handleRemove=(ele)=>{
    pull(ele);
  }
  return (
    <div>
    {/* //heading */}
       <p className='text-white text-3xl font-semibold '>
        Cart
      </p>

       <p className='mt-12 w-full border-b-[1px] pb-2 border-white text-xl text-gray-500'>{count} Courses in Cart</p>
        <div className='flex flex-row gap-4'>

        {/* //Courses */}

          <div className='w-3/4 flex flex-col gap-4'>
             {data.map((ele,id)=>{
             return <div className='w-full mt-2 flex flex-row' key={id}>
                    <div className='flex flex-row gap-4'>
                     <img className='w-[40%] ' src={ele.thumbnail}/>
                     <div className="text-white mt-3">
                      <p className='font-semibold text-xl'>{ele.courceName}</p>
                      <p className='tetx-medium font-medium text-gray-500'>{ele.description}</p>
                    </div>
                   </div>
                    <div className='text-white flex flex-col'>
                      <button onClick={()=>handleRemove(ele)} className='flex flex-row gap-2 items-center text-[#ef476f] bg-[#2c333f] p-3 rounded-xl text-lg'><RiDeleteBin6Line className='text-[#ef476f]'/> Remove</button>
                      <p className='text-2xl mt-2 text-yellow-400 text-bold'>Rs. {ele.price}</p>
                    </div>
                    
             </div>
              })}
          </div>
           
           {/* //total price */}
         <div className='flex flex-col gap-4 w-[1/4] text-white p-3 rounded-xl'>
          <div className='flex flex-col gap-2'>
          <p className='text-gray-500 text-medium font-medium'>Total:</p>
          <p className='text-xl mt-2 text-yellow-400 text-bold'>{price}</p>
          </div>
          
          <button className='text-black font-semibold w-full bg-yellow-400 p-3 rounded-xl text-lg'>Buy Now</button>
         </div>

        </div>
      
       
   
    </div>
  )
}

export default Cart
