import React from 'react'
import img from '../assets/images/yoga-class.jpg'

const Classes = () => {
  return (
    <div className='bg-primary text-white pt-10'>
        <div className='container flex flex-col-reverse md:flex-row justify-center items-center md:gap-40'>
            <div className='w-full md:w-2/4 space-y-10 pt-12 lg:pt-24'>
                <h1 className='text-4xl lg:text-5xl font-bold'>How we conduct our classes</h1>
                <p className='text-base lg:text-xl font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias molestias earum commodi accusantium illum eveniet eum odit aut minus, id maiores eos fugiat quisquam perspiciatis quam sequi perferendis hic iusto quis dicta vel beatae mollitia. Impedit at, perferendis, totam praesentium expedita dignissimos accusamus porro vero nobis veritatis nemo labore libero harum blanditiis numquam.</p>
                <p className='text-xs lg:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias molestias earum commodi accusantium illum eveniet eum odit aut minus, id maiores eos fugiat quisquam perspiciatis quam sequi perferendis hic iusto quis dicta vel beatae mollitia. Impedit at, perferendis, totam praesentium expedita dignissimos accusamus porro vero nobis veritatis nemo labore libero harum blanditiis numquam.</p>
            
            </div>
            <div className='w-full md:w-2/4 lg:w-1/4'>
                <img className='rounded-lg' src={img} alt="woman-doing-yoga-indoors" />
            </div>
        </div>
    </div>
  )
}

export default Classes