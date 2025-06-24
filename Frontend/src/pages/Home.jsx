
import { FaArrowRight } from "react-icons/fa";
import TextGrad from "../Component/Homepage/TextGrad";
import Button from "../Component/Homepage/Button";
import banner from "../assets/Images/banner.mp4";
import TextImage from "../Component/TextImage";
import boxoffice from "../assets/Images/boxoffice.png"
import Foundingstory from "../assets/Images/FoundingStory.png"

const Home = () => {
  return (
    <div>
      {/*section 1*/}
      <div className="flex flex-col items-center justify-between mx-auto w-11/12 relative bg-[#000824]">

        {/*button*/}
        <div className=" w-fit mx-auto mt-7 text-white bg-gray-600 rounded-md hover:bg-slate-500 transition-all  duration-200 hover:scale-95"> {/*border div*/}
            <div className="flex items-center gap-2 p-2 font-semibold cursor-pointer">  {/*content div*/}
                 Become an instructor
                 <FaArrowRight />
            </div>
        </div>
        {/*heading*/}
        <div className="flex flex-row gap-2 text-white mt-5 text-4xl font-semibold">
          Empower Your Future with <TextGrad text={'Coding Skills'}/>
        </div>

        {/*subheading*/}
        <div className=" font-medium leading-6 mt-5 text-lg text-gray-400 text-center max-w-[900px] mx-auto">
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
          position={"flex-row"}
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
          position={"flex-row-reverse"}
          Image={Foundingstory}
         />
 
        </div>
      </div>
    </div>
  )
}

export default Home
