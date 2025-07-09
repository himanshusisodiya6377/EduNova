import React from 'react'
import Sidebar from '../Component/DashBoard/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex h-screen flex-row w-ful overflow-hidden bg-[#000814]'>
      <div className=' items-center h-full w-[20%]'>
        <Sidebar/>
      </div>
      <div className='bg-[#000814] w-[80%] h-full overflow-y-auto'>
        <div className='w-11/12 mx-auto overflow-y-auto mt-[7%]'>
        <Outlet/>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
