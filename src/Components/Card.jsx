import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";

function Card({name,type,id,price,image}) {
  return (
    <div className='w-[280px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-[0.5px]  border-red-300'>
        <img src={image} className='w-[100%] h-[60%] rounded-lg object-cover'/>
      <div className='text-2xl font-semibold'>
        {name}
      </div>
      <div className='w-full flex items-center justify-between text-red-500'>
        <div className='text-lg font-bold'>
           Rs:{price}
        </div>
        <div className='flex items-center gap-2 text-lg font-semibold'>
            {type==='veg' ? <LuLeafyGreen/> : <GiChickenOven />}
            <span>{type}</span>
        </div>
      </div>
      <button className='w-full p-3 bg-red-500 rounded-lg hover:bg-red-400 font-semibold text-white' >Add to Cart</button>
    </div>
  )
}

export default Card
