import React from 'react'
import img from '../assets/images/about.jpg'

const About = () => {
  return (
    <div className='bg-primary text-white pt-10'>
        <div className='container flex flex-col md:flex-row justify-center md:gap-40'>
            <div className='w-full md:w-2/4 lg:w-1/4'>
                <img className='rounded-lg' src={img} alt="group-women-practicing-stretching-mats" />
            </div>
            <div className='w-full md:w-2/4 space-y-10 pt-8 '>
                <h1 className='text-4xl lg:text-5xl font-bold'> About Us</h1>
                <p className='text-base lg:text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nulla excepturi reiciendis facere odio alias quo natus nisi molestias. Eaque animi explicabo impedit libero vitae nihil dolorem assumenda aspernatur facere.</p>
                <p className='text-sm lg:text-lg font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nulla excepturi reiciendis facere odio alias quo natus nisi molestias. Eaque animi explicabo impedit libero vitae nihil dolorem assumenda aspernatur facere.</p>
                <p className='text-xs lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nulla excepturi reiciendis facere odio alias quo natus nisi molestias. Eaque animi explicabo impedit libero vitae nihil dolorem assumenda aspernatur facere.</p>
            </div>
        </div>
    </div>
  )
}

export default About