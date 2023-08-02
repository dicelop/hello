import React from 'react'
import logo from '../image/roi.png'


export default function Navbar() {
  return (
    <div className='bg-slant-300 shadow-lg shadow-indigo-500/50'>
      <nav className='  flex  justify-between p-4'>
        <div className='h-[30px] w-[80px] ml-4'>
           <img src={logo} alt='a logo'/>
        </div>

        <ul className=' flex gap-10 text-bold '>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
        <div>
           <button className='border-2 border-black px-4 bg-red-700 hover:bg-red-400 rounded text-white  '>Login</button>
        </div>
      </nav>
    </div>
  )
}
