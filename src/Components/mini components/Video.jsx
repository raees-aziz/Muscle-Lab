import React from "react";
import Marquee from "react-fast-marquee";

const Video = () => {
  const brandLogo=[
    "/image/m-logo.png",
    "/image/m-logo2.png",
    "/image/m-logo3.png",
    "/image/m-logo4.png",
    "/image/m-logo5.png",
    "/image/m-logo6.png",
    "/image/m-logo7.png",
    "/image/m-logo8.png",
  ]
  return (
    <>
    
      <video muted loop autoPlay className="object-cover h-screen w-screen">
        <source src="/video/muscle-lab.mp4" />
      </video>
          <div className="h-[200px] w-full py-5 mt-10">
<div className="flex gap-5 text-2xl text-white ">

 <Marquee pauseOnClick={true}>
{brandLogo.map((item,index)=>(
  <img className="w-full h-40  grayscale py-4" key={index} src={item} alt="" />
))}
</Marquee>


</div>
      </div>
    </>
  );
};

export default Video;
