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
                    {/* <button className="mx-auto z-100 cursor-none size-20 font-bebas-neue tracking-widest text-xl absolute bottom-10 font-bold rounded-full before:content-['Hello_World'] bg-red-900"></button> */}
                    <div className='absolute bottom-0 left-75 flex justify-center w-1/2 py-2'><Circular/></div>
                </div>

            </div>
        </section>
    )
}

export default Contact