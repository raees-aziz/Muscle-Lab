import React from 'react'
import Marquee from 'react-fast-marquee'
const MarqueAnimation = () => {
   const brandLogo = [
     "/image/m-logo.png",
     "/image/m-logo2.png",
     "/image/m-logo3.png",
     "/image/m-logo.png",
     "/image/m-logo4.png",
     "/image/m-logo5.png",
     "/image/m-logo6.png",
    // "/image/m-logo7.png",
    // "/image/m-logo8.png",
  ]
  return (
    <div className='text-8xl mt-10  text-primary font-extrabold font-bebas-neue'>
      <Marquee speed={100} pauseOnHover={true} className='bg-main overflow-hidden'>
        Our Brand collaboration  Our Brand collaboration
      </Marquee>
      <Marquee pauseOnHover={true} className=' h-40 text-main overflow-hidden flex justify-center items-center shrink-0 gap-10'>
      {brandLogo.map((src,index)=>(
        <img className='object-center h-35 mx-4 w-80' key={index} src={src} alt="" />
      ))}  
      </Marquee>
      <Marquee direction speed={100} pauseOnHover={true} className='bg-white text-main overflow-hidden'>
        Our Brand collaboration  Our Brand collaboration
      </Marquee>
    </div>
  )
}

export default MarqueAnimation