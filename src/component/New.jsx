import React from 'react'
import shoes from '../image/roll.png'
export default function New() {
  return (
    <div className='max-w-[1240px] mx-auto h-[80px]  grid grid-cols-2   '>
      <div className='ml-10 justify-center '>
        <h1 className='text-[100px] font-extrabold leading-normal'> YOUR FEET DESERVE THE BEST</h1>
       <p className='text-2xl text-justify'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta quibusdam ut quas animi, velit sequi repellat perferendis impedit saepe beatae voluptatum distinctio eum hic praesentium vel sunt qui ipsa?</p>
        
       <button className='border-2 px-4 bg-red-700 hover:bg-red-400 rounded text-white mr-6 mt-5'>Shop Now</button>
       
       <button className='border-2 border-black px-4 rounded'>Category</button>

     
      </div>
      <div >
      <img src={shoes} alt='a logo' className='h-[800px] w-[1000px]'/>
      </div>
    </div>
  )
}
