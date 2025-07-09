import React from 'react'
import { useContext } from 'react'
import {AuthContext} from "../ContextApi/Auth"
import Button from "../Component/Homepage/Button"

const Profile = () => {
   const {data}=useContext(AuthContext);
  //  console.log(data)
  return (
    <div className='flex flex-col gap-10 pb-32'>
      {/* part 1 */}
      <p className='text-white text-3xl font-semibold '>
      My Profile
      </p>

      {/* //part 2 */}
      <div className='bg-[#161D29] p-8 flex flex-row gap-4 items-center rounded-xl justify-between'>
      <div>
       <div className='flex flex-row gap-4'>
        <img className='h-16 w-16 border rounded-full border-white' src={data.thumbnail}/>
        <div className='text-white'>
         <p className='text-medium font-semibold'>{data.firstname} {data.lastname}</p>
         <p className='text-gray-500'>{data.email}</p>
        </div>
       </div>
      </div>
      <Button path={"/dashboard/setting"} action={true} text={"Edit"}/>
      </div>

      {/* part 3 */}
      <div className='bg-[#161D29] p-8 flex flex-row gap-4 items-center rounded-xl justify-between'>
        <div>
        <div className='text-white flex flex-col gap-4'>
         <p className='text-medium text-xl font-semibold'>About</p>
         <p className='text-gray-500'>{data.Profile.about}</p>
        </div>
        </div>
       <Button path={"/dashboard/setting"} action={true} text={"Edit"}/>
      </div>

      {/* part 4 */}
      <div className='bg-[#161D29] p-8 flex flex-row gap-4 items-center rounded-xl justify-between'>
        <div>
        <p className='text-medium font-semibold text-white text-xl'>
        Personal Details
        </p>
        <div className='flex mt-10 flex-row gap-14'>
          <div className='flex flex-col gap-4 text-white'>
          <div>
            <p className='text-gray-500'>First Name</p>
            <p className='text-medium font-medium'>{data.firstname}</p>
          </div>
          <div>
            <p className='text-gray-500'>Email</p>
            <p className='text-medium font-medium'>{data.email}</p>
          </div>
          <div>
            <p className='text-gray-500'>Gender</p>
            <p className='text-medium font-medium'>{data.Profile.gender}</p>
          </div>
          </div>
           <div className='flex flex-col gap-4 text-white'>
          <div>
            <p className='text-gray-500'>Last Name</p>
            <p className='text-medium font-medium'>{data.lastname}</p>
          </div>
          <div>
            <p className='text-gray-500'>Phone Number</p>
            <p className='text-medium font-medium'>{data.Profile.phone}</p>
          </div>
          <div>
            <p className='text-gray-500'>Date Of Birth</p>
            <p className='text-medium font-medium'>{data.Profile.DOB}</p>
          </div>
          </div> 
        </div>
        </div>
        <Button path={"/dashboard/setting"} action={true} text={"Edit"}/>
      </div>
    </div>
  )
}

export default Profile
