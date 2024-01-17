import {React, useState} from 'react'
import {IoMdCloseCircle} from "react-icons/io"
import {RiMenu4Fill} from "react-icons/ri"

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu)
    }

  return (
    <header className='bg-color text-white py-4'>
        {/* desktop nav section */}
        <nav className='container flex justify-between list-none text-xl font-semibold'>
            <div className='hidden md:flex gap-6'>
                <li className='cursor-pointer hover:text-primary transition duration-300 ease linear'>About</li>
                <li className='cursor-pointer hover:text-primary transition duration-300 ease linear'>Classes</li>
                <li className='cursor-pointer hover:text-primary transition duration-300 ease linear'>Prices</li>
            </div>
            <a href="" className='font-bold text-2xl'>Yoga</a>
            <div className='hidden md:flex gap-6'>
                <li className='cursor-pointer hover:text-primary transition duration-300 ease linear'>Gallery</li>
                <li className='cursor-pointer hover:text-primary transition duration-300 ease linear'>Teachers</li>
                <li className='cursor-pointer hover:text-primary transition duration-300 ease linear'>Blogs</li>
            </div>

            <div className='md:hidden flex items-center'>{menu ? <IoMdCloseCircle size={29} className="cursor-pointer" onClick={handleChange} />: <RiMenu4Fill size={29} className="cursor-pointer" onClick={handleChange} />}</div>
        </nav>
        {/* responsive section */}
        <div className={`${menu? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col absolute z-10 bg-purple-950 text-white list-none left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4  gap-8 w-3/4 h-fit rounded-r-xl transition-transform duration-300` }>
                <li className='cursor-pointer hover:text-primary transition duration-300 ease linear'>About</li>
                <li className='cursor-pointer hover:text-primary transition duration-300 ease linear'>Classes</li>
                <li className='cursor-pointer hover:text-primary transition duration-300 ease linear'>Prices</li>
                <li className='cursor-pointer hover:text-primary transition duration-300 ease linear'>Gallery</li>
                <li className='cursor-pointer hover:text-primary transition duration-300 ease linear'>Teachers</li>
                <li className='cursor-pointer hover:text-primary transition duration-300 ease linear'>Blogs</li>
            </div>
    </header>
  )
}

export default Navbar