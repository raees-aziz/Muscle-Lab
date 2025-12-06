import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { HeartPulse, Dumbbell, Flame, Zap } from "lucide-react";

const plans = [
  {
    title: "Cardio Training",
    desc: "Boost endurance and heart health with high-energy cardio sessions designed to keep you moving.",
    icon: <HeartPulse className="w-8 h-8 text-lime-400" />,
  },
  {
    title: "Strength Build",
    desc: "Develop power and resilience through expert-guided strength training tailored to all fitness levels.",
    icon: <Dumbbell className="w-8 h-8 text-lime-400" />,
  },
  {
    title: "Fat Loss",
    desc: "Shed unwanted fat with dynamic workout routines and fat-burning strategies that deliver lasting results.",
    icon: <Flame className="w-8 h-8 text-lime-400" />,
  },
  {
    title: "HIIT Workouts",
    desc: "Maximize calorie burn and improve fitness with short, intense high‑intensity interval training sessions.",
    icon: <Zap className="w-8 h-8 text-lime-400" />,
  },
];

export default function FitnessCards() {
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="bg-[#1a1a1a] rounded-2xl p-6 shadow-xl border border-[#2a2a2a] text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="flex flex-col gap-4 p-0">
                <div>{p.icon}</div>
                <h2 className="text-xl font-semibold">{p.title}</h2>
                <p className="text-sm opacity-80 leading-relaxed">{p.desc}</p>
                <button className="mt-4 bg-lime-400 text-black font-semibold px-4 py-2 rounded-xl w-fit hover:bg-lime-300 transition-all">See Plan</button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
