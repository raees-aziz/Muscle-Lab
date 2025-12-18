import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { motion } from "framer-motion";
import { FaHeartPulse } from "react-icons/fa6";
// import { HeartPulse, Dumbbell, Flame, Zap } from "lucide-react";
import { BiSolidZap } from "react-icons/bi";
import { FaFireFlameCurved } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/all";
import { FaDumbbell } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



const plans = [
  {
    title: "Cardio Training",
    desc: "Boost endurance and heart health with high-energy cardio sessions designed to keep you moving.",
    icon: <FaHeartPulse className="size-30 lg:size-20 mx-auto text-main" />,
  },
  {
    title: "Strength Build",
    desc: "Develop power and resilience through expert-guided strength training tailored to all fitness levels.",
    icon: <FaDumbbell className="size-30 lg:size-20 mx-auto text-main" />,
  },
  {
    title: "Fat Loss",
    desc: "Shed unwanted fat with dynamic workout routines and fat-burning strategies that deliver lasting results.",
    icon: <FaFireFlameCurved className="size-30 lg:size-20 mx-auto text-main" />,
  },
  {
    title: "HIIT Workouts",
    desc: "Maximize calorie burn and improve fitness with short, intense high‑intensity interval training sessions.",
    icon: <BiSolidZap className="size-30 lg:size-20 mx-auto text-main" />,
  },
  {
    title: "Cardio Training",
    desc: "Boost endurance and heart health with high-energy cardio sessions designed to keep you moving.",
    icon: <FaHeartPulse className="size-30 lg:size-20 mx-auto text-main" />,
  },
  {
    title: "Strength Build",
    desc: "Develop power and resilience through expert-guided strength training tailored to all fitness levels.",
    icon: <FaDumbbell className="size-30 lg:size-20 mx-auto text-main" />,
  },
  {
    title: "Fat Loss",
    desc: "Shed unwanted fat with dynamic workout routines and fat-burning strategies that deliver lasting results.",
    icon: <FaFireFlameCurved className="size-30 lg:size-20 mx-auto text-main" />,
  },
  {
    title: "HIIT Workouts",
    desc: "Maximize calorie burn and improve fitness with short, intense high‑intensity interval training sessions.",
    icon: <BiSolidZap className="size-30 lg:size-20 mx-auto text-main" />,
  },
];

export default function FitnessCards() {
  gsap.registerPlugin(ScrollTrigger)
gsap.set('.cards',{x:-100})
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards",
        start: 'top 70%',
        end: "top 20%",
        scrub: 1,
        // pin:true,
        // markers: true,
      }})
      tl.to('.cards', {
      x: -1000,
      stagger: 0.3,
      // opacity: 0,
      duration: 2,
      delay: 0.3
    })
  }, [])
  return (
    <div className="w-full bg-black flex items-start justify-center p-6 cards">
      <div className="flex gap-6 w-full ">
        {plans.map((p, i) => (
          <div
            key={i}
          // initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="bg-[#1a1a1a] w-[300px] rounded-2xl p-6 shadow-xl border border-[#2a2a2a] text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
              <div className="flex flex-col gap-4 p-0">
                <div className="w-full mx-auto">{p.icon}</div>
                <h2 className="text-xl font-semibold">{p.title}</h2>
                <p className="text-sm opacity-80 leading-relaxed">{p.desc}</p>
                {/* <button className="mt-4 bg-main text-black cursor-none font-semibold px-4 py-2 rounded-xl w-full hover:bg-main transition-all">See Plan</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
