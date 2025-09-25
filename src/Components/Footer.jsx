import React, { useContext, useEffect, useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";



function Footer() {

  return (
    <div className='w-full h-[auto] flex items-center justify-between px-5 md:px-8'>
      
      
      {/*........Search bar........*/}
      <div className='bg-white flex items-center justify-center flex-wrap h-[60px] w-[100%]  gap-5 p-5 rounded-md shadow-md' >
      <a href="https://www.instagram.com/muzamilcreates/profilecard/?igsh=bWc4eWltc3E5aXpi"><FaInstagram className='w-[30px] h-[30px] text-red-500'/></a>
      <a href="https://www.facebook.com/share/1AAsz9LTyQ/"><CiFacebook className='w-[30px] h-[30px] text-red-500'/></a>
      <a href="https://www.linkedin.com/in/muzamil-hussain-100323292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><CiLinkedin className='w-[30px] h-[30px] text-red-500'/></a>
      <FaXTwitter className='w-[30px] h-[30px] text-red-500'/>
      <p className='text-red-500'>Muzamil Hussain muzamilhussain369@gmail.com</p>
      </div>
        
      
    </div>
  )
}

export default Footer
