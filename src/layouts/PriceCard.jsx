import React from 'react'
import {TiTick} from 'react-icons/ti'

const PriceCard = ({price, plan}) => {
  return (
    <div className='w-full md:w-4/5 p-3 border-2 border-white bg-black space-y-4 text-white text-center cursor-pointer hover:scale-95 transition duration-200 ease-in-out'>
        <h2 className='text-2xl font-semibold py-2'>{plan}</h2>
        <h3 className='tex  t-5xl font-bold'>${price}</h3>
        <h3 className='text-xl font-semibold'>/month</h3>

        <div className='space-y-2'>
            <div className='flex'>
                <TiTick size={42} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est neque veritatis molestiae magni laborum.</p>
            </div>
            <div className='flex'>
                <TiTick size={42} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est neque veritatis molestiae magni laborum.</p>
            </div>
            <div className='flex pb-6'>
                <TiTick size={42} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est neque veritatis molestiae magni laborum.</p>
            </div>
            <button className='bg-white py-1 px-5 text-black text-lg font-bold rounded-md hover:bg-purple-300 transition ease-linear'>Book Now</button>
        </div>

    </div>
  )
}

export default PriceCard