import React from 'react'

const exercises = [
    { title: "Barbell Basics", img: "/image/exercise.jpg" },
    { title: "Hantelbell Masterclass", img: "/image/exercise2.jpg" },
    { title: "Cardio Power Boost", img: "/image/exercise3.avif" },
    { title: "Hypertrophy", img: "/image/exercise4.jpg" },
    { title: "Rope Climbing", img: "/image/exercise5.jpg" },
    { title: "TRX Suspension", img: "/image/exercise6.jpg" },
];
const GymProduct = () => {
    return (
        <section className='max-w-7xl mx-auto px-4 '>
            <div className=' w-full'>
                <h4 className="fade-title2 text-8xl text-center text-white font-bebas-neue">
                    Train Smarter <br /> Unleash your Fitness </h4>
                <p className='text-gray-300 text-center text-xl'>Unlock Your Fully Potential With Our Expertly Designed Courses, Tailored To Help You <br />Maximum Result In Less Time</p>
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Exercises</h2>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                        {exercises.map((exercise, index) => (
                            <div
                                key={index}
                                className=" overflow-hidden rounded-lg shadow-lg group"
                            >
                                <img
                                    src={exercise.img}
                                    alt={exercise.title}
                                    className="w-full h-64 object-cover grayscale transform transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="bg-opacity-60 text-main font-bebas-neue text-3xl p-4 text-center">
                                    {exercise.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GymProduct