import React, { useEffect, } from "react";
import gsap from "gsap";
import Navbar from "./Components/Navbar";
import Services from './Components/Services'
import Benefits from './Components/Benefits'
import { useCursorStore } from "./services";
import Video from "./Components/mini components/Video";

const App = () => {
  const { scale, radius, width, height } = useCursorStore();

  // console.log(typeof scale)

  useEffect(() => {
    gsap.to("#cursor", {
      scale,
      width: width,
      height: height,
      borderRadius: radius,
      duration: 0.2,
      ease: "power2.out",
    });
  }, [scale, radius, width, height]);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      gsap.to("#cursor", {
        x: clientX,
        y: clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="cursor-none overflow-hidden">
       <div id="cursor" className="size-5 bg-main fixed top-0 left-0 mix-blend-difference pointer-events-none z-[9999] " />
    <div className="h-screen w-screen">

      <Video />
      <Navbar/>
    </div>
      <Benefits/>
      <Services/>

    </div>
      
  );
};

export default App;
