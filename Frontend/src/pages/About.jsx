import TextGrad from '../Component/Homepage/TextGrad'
import img1 from "../assets/Images/aboutus1.webp"
import img2 from "../assets/Images/aboutus2.webp"
import img3 from "../assets/Images/aboutus3.webp"
import Heading from '../Component/About/Heading'
import img4 from "../assets/Images/FoundingStory.png"
import Gridsqaure from '../Component/About/Gridsqaure'
import {Grid} from "../data/aboutgrid"
import Contactform from '../Component/Homepage/Contactform'

const About = () => {
  return (
    <div className='bg-[#000814] min-h-screen'>
    {/* //introduce to creat different bg colour so we give him fix height */}
    <section className='bg-[#2c333f] h-[500px]'>
     {/* extra div for gray background */}
     <div className='relative w-11/12 mx-auto flex text-white flex-col  items-center'>
    {/* heading+subheading */}
    <p className='text-4xl font-semibold lg:w-[70%] text-center mt-16'>
     Driving Innovation in Online Education for a <TextGrad text={"Brighter Future"}/>
    </p>
    <p className='text-gray-500 font-medium text-md text-center w-[63%]'>
     Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
    </p>

    {/* img */}
    <div className='flex top-40  md:flex-row flex-col gap-4 mt-16'>
        <img className='w-[33%]' src={img1}/>
        <img className='w-[33%]' src={img2}/>
        <img className='w-[33%]' src={img3}/>
    </div>
    </div>
    </section>
    <section className='w-full border-b-2 border-gray-500'>
    <div className='w-11/12 mx-auto'>
        <p className='font-semibold text-4xl  text-center pb-10 text-white mt-40'>We are passionate about revolutionizing the way we learn. Our innovative platform <TextGrad text={"combines technology"}/>, <TextGrad text={"expertise"}/>, and <br/> community to create an <TextGrad text={"unparalleled educational experience."}/></p>
    </div>
    </section>
    <section className='w-11/12 mx-auto'>
      <div className='flex lg:flex-row flex-col w-full mt-20 pb-32 gap-4'>
         <Heading action={true}  heading={"Our Founding Story"} subheading={"Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential."}/>
         <img className='h-[90%] md:mt-20' src={img4}/>
        </div>
        <div className='flex  lg:flex-row flex-col lg:gap-6 md:gap-10 pb-28 mt-4 w-full'>
          <Heading heading={"Our Vision"} subheading={"With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience."}/>
          <Heading heading={"Our Mission"} subheading={"Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities."}/>
        </div>
    </section>
    <section className='w-full bg-[#2c333f] '>
    <div className='flex flex-row gap-4 w-11/12 mx-auto justify-between items-center'>
        <Gridsqaure heading={"5K"} subheading={"Active Students"}/>
        <Gridsqaure heading={"10+"} subheading={"Mentors"}/>
        <Gridsqaure heading={"200+"} subheading={"Courses"}/>
        <Gridsqaure heading={"50+"} subheading={"Awards"}/>
    </div>
    </section>
    <section className='w-11/12 mx-auto'>
    {/* //changes  */}
    {/* //using grid to implement the un */}
     <div className='grid lg:grid-cols-4 grid-cols-1 lg:grid-rows-2 mt-20 mx-auto w-11/12'>
       {/* imtially give him col span 2 */}
       <div className='flex flex-col gap-2 col-span-2'>
        <p className='text-white text-4xl font-bold '>
         World-Class Learning for <TextGrad text={"Anyone, Anywhere."}/>
        </p>
        <p className='text-medium font-medium text-gray-500'>
         Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.
        </p> 
        <button className='bg-yellow-400 tetx-black font-medium w-fit p-2 rounded-md mt-4'>Learn More</button>
       </div>
       {/* getting data from grid and using map to show */}
       {/* if index provided is even than bg is dark gray if odd  than light grey if it odd */}
       {/* and equal to 3 than start it from col 2 */}
       {Grid.map((ele,idx)=>(
        <div className={`${ele.index%2==0 ? 
        "bg-[#161D29] text-white flex flex-col gap-3 p-10":
        //here again no $ is used as use directly
        ele.index==3 ? "bg-[#2c333f] text-white flex col-start-2 flex-col gap-3 p-10"
        :"bg-[#2c333f] text-white flex flex-col gap-3 p-10"}`} key={idx}>
          <p className='text-lg'>
            {ele.heading}
          </p>
          <p className='text-gray-500 font-medium text-medium'>
           {ele.subheading}
          </p>
        </div>
       ))}
    </div>
    <div className='w-full'>
    <div className='w-[50%] mx-auto mt-16 items-center pb-20'>
      <div className='text-centers flex flex-col gap-2 items-center'>
        <p className='text-white text-4xl font-semibold'>
         Get in Touch
        </p>
        <p className='text-medium font-medium text-gray-500'>
         We'd love to here for you, Please fill out this form.
        </p>
      </div>
      <Contactform/>
    </div>
    </div>
    </section>
    </div>
  )
}

export default About
