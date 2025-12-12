import React from 'react'
import TrainerCard from './mini components/TrainerCard.jsx'
const exercises = [
    { title: "Jhon Vick", img: "/image/builder-2.jpg" },
    { title: "Adam Zampa", img: "/image/trainer-2.jpg" },
    { title: "Michael Lucas", img: "/image/trainer-1.jpg" },
    // { title: "Hypertrophy", img: "/image/exercise4.jpg" },
    // { title: "Rope Climbing", img: "/image/exercise5.jpg" },
    // { title: "TRX Suspension", img: "/image/exercise6.jpg" },
];
const Trainer = () => {
    return (
        <section className='max-w-7xl mx-auto px-4 '>
            <div className=' w-full'>
                <h4 className="fade-title2 text-8xl text-center text-white font-bebas-neue">
                    Your Fitness <br /> <span className='text-main'>Goals, Their Expertise </span></h4>
                <p className='text-gray-300 text-center text-xl'>Our Team Of Certified Trainers Brings Unparalleled Expertise To Help You Acheive Your Fitness Goals</p>
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Exercises</h2>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                        {exercises.map(({title,img}, index) => (
                           <div>
                            <TrainerCard src={img} name={title}/>
                            {/* <TrainerCard src={img} name={title}/>
                            <TrainerCard src={img} name={title}/> */}
                           
                           </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trainer