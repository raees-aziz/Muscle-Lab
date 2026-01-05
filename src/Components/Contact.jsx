import React from 'react'
import Circular from "../Components/button/Circular.jsx"
const Contact = () => {
    return (
        <section className='max-7xl mx-auto'>
            <div className='w-full h-screen flex justify-center items-center'>
                <div className='relative w-2/3 h-1/2 bg-main rounded-3xl text-center pt-10'>
                    <h2 className='text-7xl tracking-wider font-bebas-neue'>Connect to engage Transform</h2>
                    <p className='font-semibold text-lg '>Join A Vibrant Community for fuel Motivation, Engagement Drives Progress, And Transformation</p>
                    <div className='w-full h-20 object-cover absolute -top-10'>
                        <img src="/image/input.png" alt="" />
                    </div>
                    <input className='absolute right-70 bottom-40 text-center border-b-2 border-black  text-2xl font-bebas-neue z-100 w-1/2 px-2 py-6 rounded-xl' type="text" placeholder='abc@musclelab.com' />
                    <button className='absolute bottom-0 text-2xl mb- cursor-none mb-4 p-2 w-30 bg-primary text-main font-bebas-neue rounded-lg'>SUBMIT</button>
                </div>

            </div>
        </section>
    )
}

export default Contact