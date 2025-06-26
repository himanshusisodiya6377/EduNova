import frame from "../../assets/Images/frame.png"

const Image = ({image}) => {
  return (
    <div  style={{ backgroundImage: `url(${frame})` }} className="relative w-[80%] mr-6">
      <img className="-md:translate-x-5 md:translate-y-5 -translate-x-8 translate-y-5" src={image} />
    </div>
  )
}

export default Image
