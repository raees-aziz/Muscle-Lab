import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { motion } from "framer-motion";
import { FaHeartPulse } from "react-icons/fa6";
// import { HeartPulse, Dumbbell, Flame, Zap } from "lucide-react";
import { BiSolidZap } from "react-icons/bi";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa6";


const plans = [
  {
    title: "Cardio Training",
    desc: "Boost endurance and heart health with high-energy cardio sessions designed to keep you moving.",
    icon: <FaHeartPulse className="size-30 lg:size-20 mx-auto text-lime-400" />,
  },
  {
    title: "Strength Build",
    desc: "Develop power and resilience through expert-guided strength training tailored to all fitness levels.",
    icon: <FaDumbbell className="size-30 lg:size-20 mx-auto text-lime-400" />,
  },
  {
    title: "Fat Loss",
    desc: "Shed unwanted fat with dynamic workout routines and fat-burning strategies that deliver lasting results.",
    icon: <FaFireFlameCurved className="size-30 lg:size-20 mx-auto text-lime-400" />,
  },
  {
    title: "HIIT Workouts",
    desc: "Maximize calorie burn and improve fitness with short, intense high‑intensity interval training sessions.",
    icon: <BiSolidZap className="size-30 lg:size-20 mx-auto text-lime-400" />,
  },
  {
    title: "Cardio Training",
    desc: "Boost endurance and heart health with high-energy cardio sessions designed to keep you moving.",
    icon: <FaHeartPulse className="size-30 lg:size-20 mx-auto text-lime-400" />,
  },
  {
    title: "Strength Build",
    desc: "Develop power and resilience through expert-guided strength training tailored to all fitness levels.",
    icon: <FaDumbbell className="size-30 lg:size-20 mx-auto text-lime-400" />,
  },
  {
    title: "Fat Loss",
    desc: "Shed unwanted fat with dynamic workout routines and fat-burning strategies that deliver lasting results.",
    icon: <FaFireFlameCurved className="size-30 lg:size-20 mx-auto text-lime-400" />,
  },
  {
    title: "HIIT Workouts",
    desc: "Maximize calorie burn and improve fitness with short, intense high‑intensity interval training sessions.",
    icon: <BiSolidZap className="size-30 lg:size-20 mx-auto text-lime-400" />,
  },
];

export default function FitnessCards() {
  return (
    <div className="w-full min-h-screen bg-black flex items-start justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {plans.map((p, i) => (
          <div
            key={i}
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-xl border border-[#2a2a2a] text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
              <div className="flex flex-col gap-4 p-0">
                <div className="w-full mx-auto">{p.icon}</div>
                <h2 className="text-xl font-semibold">{p.title}</h2>
                <p className="text-sm opacity-80 leading-relaxed">{p.desc}</p>
                <button className="mt-4 bg-lime-400 text-black cursor-none font-semibold px-4 py-2 rounded-xl w-full hover:bg-lime-300 transition-all">See Plan</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
