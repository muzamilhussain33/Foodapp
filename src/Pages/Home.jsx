import React, { useContext, useState } from 'react'
import Nav from '../Components/Nav'
import Category from './Category'
import Card from '../Components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import Card2 from '../Components/Card2' 

function Home() {
  let {Cate, setCate, input, showCart, setShowCart} = useContext(dataContext);
  function filter(category) {
    if (category==="All") {
      setCate(food_items);
    }
    else{
      let newList = food_items.filter((item) => (item.food_category === category))
      setCate(newList);
    }
  } 

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      {/*.............Nav bar...............*/}
      <Nav/>
      {input === ''?<div className='w-[100%] flex flex-wrap justify-center items-center gap-5 '>
      {Category.map((item) => {
        return(<div className='w-[140px] h-[150px] bg-white flex flex-col items-start justify-start gap-5 p-5 text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-red-200 transition-all duration-200 cursor-pointer' onClick={() => filter(item.name)}>
          <div>{item.icon}</div>
          <div>{item.name}</div>
        </div>)
      })}
    </div>:null}
    {/*.............Cards.................*/}
      <div className='w-full flex flex-wrap justify-center items-center gap-5 px-5 py-8'>
      {
        Cate.map((item) => (
          <Card name={item.food_name} type={item.food_type} price={item.price} image={item.food_image} id={item.id}/>
        )) 
      }
    </div>
    {/*............cart.................*/}
      <div className={`w-full md:w-[40%] h-[100vh] fixed top-0 right-0 bg-white p-6 transition-all duration-500 ${showCart? "translate-x-0" : "translate-x-full"} shadow-lg`}>
        <header className=' w-full flex items-center justify-between'>
          <span className='text-red-400 text-[26px] font-bold'>Order items</span>
          <div className='text-red-400 w-[30px] h-[30px] cursor-pointer hover:text-gray-600' onClick={() => {
            setShowCart(false);
          }}>X</div>
        </header>
        <Card2/>
      </div>


    </div>
  )
}

export default Home
