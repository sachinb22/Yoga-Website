import React from 'react'
import img from '../assets/images/hero.png'

const Hero = () => {
  return (
    <div className='h-[90vh] bg-color text-white flex flex-col sm:justify-center lg:justify-start'>
        <div className='relative flex justify-center'>
            <img className='hidden sm:flex mx-auto w-3/5' src={img} alt="Woman doing the splits."  />

            <div className='absolute lg:-bottom-20'>
                <h1 className='text-[160px] lg:text-[290px] text-center'>Y O G A</h1>
                <p className='text-center text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit Ullam molestias. </p>
                <div className='flex justify-center mt-4'>
                    <button className='bg-white py-2 px-6 mt-2 text-secondary font-bold hover:bg-secondary hover:text-white transition duration-200 ease-linear rounded-full'>Book Now</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero