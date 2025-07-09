import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../ContextApi/Auth'
import Photochange from "../Component/Setting/Photochange"
import ProfileInformation from '../Component/Setting/ProfileInformation'
import Resetpassword from '../Component/Setting/Resetpassword'
import Deleteaccount from '../Component/Setting/Deleteaccount'

const Setting = () => {
  const {data}=useContext(AuthContext);
  return (
    <div className='flex flex-col'>

     {/* part 1 */}
      <p className='text-white text-3xl font-semibold '>Edit Profile</p>
      
      {/* part 2 */}
      <Photochange/>

      {/* part 3 */}
      <ProfileInformation/>

      {/* part 4 */}
      <Resetpassword/>

      {/* part 5 */}
      <Deleteaccount/>

    </div>
  )
}

export default Setting
