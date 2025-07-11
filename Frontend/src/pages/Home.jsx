
import { FaArrowRight } from "react-icons/fa";
import TextGrad from "../Component/Homepage/TextGrad";
import Button from "../Component/Homepage/Button";
import banner from "../assets/Images/banner.mp4";
import TextImage from "../Component/Homepage/TextImage";
import boxoffice from "../assets/Images/boxoffice.png"
import Foundingstory from "../assets/Images/home.png"
import {NavLink} from "react-router-dom"
import frame from '../assets/Images/bghome.svg';
import DottedSection from "../Component/Homepage/DottedSection";
import PhotoOverlap from "../Component/Homepage/PhotoOverlap";
import box1 from "../assets/Images/Compare_with_others.png";
import box2 from "../assets/Images/Know_your_progress.png";
import box3 from "../assets/Images/Plan_your_lessons.png";
import Standingwomen from "../assets/Images/Instructor.png";

const Home = () => {
  return (
    <div className="bg-[#000814] w-full">
      {/*section 1*/}
      <div className="flex flex-col items-center justify-between mx-auto w-11/12 relative bg-[#000814]">

        {/*button*/}
        <NavLink className=" w-fit mx-auto mt-12 text-white text-xl bg-gray-600 rounded-xl hover:bg-slate-500 transition-all  duration-200 hover:scale-95"> {/*border div*/}
            <div className="flex items-center gap-2 px-4 py-1 font-semibold cursor-pointer">  {/*content div*/}
                 Become an instructor
                 <FaArrowRight />
            </div>
        </NavLink>
        {/*heading*/}
        <div className="md:flex md:flex-row gap-2 text-white mt-7   lg:text-5xl md:text-4xl text-4xl text-center font-semibold">
          Empower Your Future with<TextGrad text={' Coding Skills'}/>
        </div>

        {/*subheading*/}
        <div className=" font-medium leading-6 mt-5 text-xl text-gray-400 text-center w-[90%] mx-auto">
          With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
        </div>

        {/*button*/}
        <div className="flex flex-row  mt-12 gap-4 justify-between items-center">
        <Button action={true} text={"Learn More"}/>
        <Button action={false} text={"Book a Demo"}/>
        </div>

        {/*video*/}
         {/* {console.log(banner)} */}
        <video autoPlay muted loop playsInline className="rounded-xl border-l border-b border-cyan-500 border-8 mt-12  shadow-md">
         <source src={banner} type="video/mp4" />
        </video>

        {/*text+animation*/}
        <div>
         <TextImage heading={
          <div>
          Unlock your <TextGrad text={"coding potential"}/> with our online courses
          </div>
         } 
          subheading={
            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          }
          text1={"Try it Yourself"}
          text2={"Learn More"}
          position={true}
          Image={boxoffice}
         />
        </div>
        {/* text+image+reverse */}
         <div>
         <TextImage heading={
          <div>
          Start <TextGrad text={"coding in seconds"}/>
          </div>
         } 
          subheading={
            "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
          }
          text1={"Continue Lesson"}
          text2={"Learn More"}
          position={false}
          Image={Foundingstory}
         />
        </div>
      </div>

      {/* section 2 */}
      <div  style={{ backgroundImage: `url(${frame})` }} className="w-full bg-white">
          {/* buttons */}
          <div className="flex flex-row items-center justify-center mt-12 lg:p-32 p-5  gap-2 w-11/12 mx-auto">
            <Button action={true} text={"Explore Full Catalog"} arrow={true}/>
            <Button action={false} text={"Learn More"}/>
          </div>
      </div>
      <div className="bg-[#F8F8F8] w-full">
      <div className="w-11/12 mx-auto items-center">
         {/* info */}
          <div className="flex lg:flex-row flex-col gap-8 justify-between">
            <div className="text-4xl font-bold items-center lg:w-[45%] w-full">
              {/* heading */}
              Get the skills you need for a <TextGrad text={"job that is in demand."}/>
            </div>
            <div className="lg:w-[40%] w-full flex gap-12 flex-col mb-16">
             <p className="text-gray-700 font-medium">The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills</p>
             <Button action={true} text={"Learn More"}/>
            </div>
          </div>
          {/* photo+fourpara */}
       <div className="flex lg:flex-row flex-col justify-between">
        <DottedSection/>
        <PhotoOverlap/>
      </div>

      {/* next+infosection */}
      <div className="flex flex-col items-center w-full mt-12 text-center">
        <p className="text-4xl font-bold">Your swiss knife for <TextGrad text={"learning any language"}/></p>
        <p className="text-md font-medium lg:w-[70%] w-[95%] mt-2 text-center text-gray-700">Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>
      </div>

      {/* 3images */}
      <div className="flex md:flex-row flex-col mt-6 items-center">
       <img  className="object-contain md:w-[34%]  w-[50%] h-auto md:translate-x-16" src={box2}/>
       <img  className="object-contain md:w-[34%]  w-[50%] h-auto " src={box1}/>   
       <img  className="object-contain  md:w-[34%] w-[50%] h-auto md:-translate-x-24 " src={box3}/>
      </div>
      {/* bottun */}

      <div className="w-full justify-center mt-5 flex mb-12">
      <Button action={true} text={"Learn More"}/>
      </div>
      <div className="h-8 bg-white"></div>
      </div>
      </div>
     
     {/* female standing */}
     <div className="w-11/12 mx-auto  items-center">
      <TextImage
        heading={
          <div>
         Become an <TextGrad text={"instructor"}/>
          </div>
         } 
          subheading={
            "Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love."
          }
          text1={"Start Teaching Today"}
          text2={"Learn More"}
          position={false}
          Image={Standingwomen}
      />
     </div>

     {/* review from other learners */}
     <div className="flex items-center text-white text-4xl justify-center p-12 font-bold">
      <span>Reviews from other learners</span>
     </div>
      
    </div>
  )
}

export default Home
