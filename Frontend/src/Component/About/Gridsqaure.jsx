import React from 'react'

const Gridsqaure = ({heading,subheading}) => {
  return (
    <div className='flex flex-col gap-2 p-8 items-center'>
      <p className='text-3xl text-white font-bold'>
        {heading}
      </p>
      <p className='font-medium text-medium text-gray-500'>
        {subheading}
      </p>
    </div>
  )
}

export default Gridsqaure
