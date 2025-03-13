import React from 'react'
import image from '../assets/image1.avif'
import { RiDeleteBin4Line } from "react-icons/ri";

function Card2() {
  return (
    <div className='w-full h-[120px] p-2 flex justify-between'>
      <div className='w-[60%] h-full flex gap-5'>
        <div className='w-[50%] h-full overflow-hidden rounded-lg'>
            <img src={image} alt="" className=' object-cover'/>
        </div>
        <div className='w-[40%] h-full flex flex-col gap-5'>
            <div className='text-lg text-gray-600 font-semibold'>Pancake</div>
            <div className='w-[110] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg text-red-400 font-semibold border-2 border-red-400 text-xl'>
                <button className='w-[30%] h-full bg-white flex items-center justify-center hover:bg-gray-200'>-</button>
                <span className='w-[40%] h-full bg-slate-300 flex items-center justify-center'>1</span>
                <button className='w-[30%] h-full bg-white flex items-center justify-center hover:bg-gray-200'>+</button>
            </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-6'>
        <span className='text-xl text-red-400 font-semibold'>499/-</span>
        <RiDeleteBin4Line className='w-[30px] h-[30px] text-slate-400'/>
      </div>
    </div>
  )
}

export default Card2
