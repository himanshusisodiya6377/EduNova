import React from 'react'
import TextGrad from '../Homepage/TextGrad'

const Heading = ({heading,subheading,action}) => {
  return (
    <div className={`flex flex-col  gap-8 ${!action ? "items-center":""}`}>
      <p>
        <TextGrad text={heading}/>
      </p>
      <p className='font-medium text-medium lg:w-[80%] text-gray-600'>
        {subheading}
      </p>
    </div>
  )
}

export default Heading
