import React from 'react'
import Logo1 from "../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../assets/TimeLineLogo/Logo4.svg"

const DottedSection = () => {
    const TimeLine = [
    {
      Logo: Logo1,
      Heading: "Leadership",
      Description: "Fully committed to the success company",
    },
    {
      Logo: Logo2,
      Heading: "Responsibility",
      Description: "Students will always be our top priority",
    },
    {
      Logo: Logo3,
      Heading: "Flexibility",
      Description: "The ability to switch is an important skills",
    },
    {
      Logo: Logo4,
      Heading: "Solve the problem",
      Description: "Code your way to a solution",
    },
  ];

  return (
    <div className='flex flex-col mx-auto mb-12'>
    {/* mapping to all values  */}
  {TimeLine.map((element, index) => (
    <div key={index} className='flex flex-col'>
        <div  className='flex flex-row gap-6 mb-2'>
      <div className='rounded-full bg-[#FFFF] border-2 p-4'>
      <img src={element.Logo}/>
      </div>
      <div className='font-bold text-medium text-gray-800'>
        {/* heading */}
        {element.Heading}
        <div className='font-semibold text-gray-700'>
          {/* subheading */}
          {element.Description}
        </div>
      </div>
    </div>
    {/* Dotted line (not after last element) */}
      {index !== TimeLine.length - 1 && (
        <div className="border-l-2 border-dotted translate-x-2 -translate-y-1 border-gray-400 h-8 ml-5"></div>
      )}
    </div>     
  ))}
</div>
  )
}

export default DottedSection
