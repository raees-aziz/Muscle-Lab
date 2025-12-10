import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import FitnessCards from "./mini components/FitnessCard";

const Benefits = () => {

  gsap.registerPlugin(ScrollTrigger, SplitText)
  useGSAP(() => {

    const split = SplitText.create('.fade-para2', { type: "words" })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefit",
        start: 'top center',
        end: "80% 100%",
        scrub: 1,
        // scrub: 1.5,
        // pin: true,
        // markers:true

      },
    });

    tl.from('.fade-title2', {
      y: 100,
      stagger: 0.3,
      opacity: 0,
      duration: 0.3,
      delay: 0.3
    })
    tl.from(split.words, {
      y: 100,
      opacity: 0,
      autoAlpha: 0,
      stagger: {
        amount: 0.5,
        from: 'random'
      }
    })



  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 cursor-none benefit">
      <div className="w-full text-center pt-10 space-y-5">
        {/*  */}
        <h4 className="fade-title2 text-8xl text-white font-bebas-neue">
          Discover <br /> What Sets Us Apart        </h4>

        <p className=" fade-para2 text-lg text-white">
          We Deliver A Fitness Experience That's Truly One-Of-Kind.Explore Now <br />
          We Help You Archeive Your Goals Faster And Smarter.
        </p>

        <div>
          <FitnessCards />
        </div>

      </div>
    </div>
  );
};

export default Benefits;
