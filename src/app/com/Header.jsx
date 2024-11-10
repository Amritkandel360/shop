import React from 'react'
//import { IconName } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { TbRefresh } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { IoMan } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link';




function Header() {
  return (
    <>
    <section className='container mx-auto'>
     <div className='flex lg:hidden justify-center items-center gap-2'>
          <span><CiMenuBurger /></span>
          <h3>Top Menu</h3>
        </div>
      <header className='container mx-auto header py-5 '>
       
   
        <div>
          <Link href='/'> 
            <img className='lg:ml-[70px] ' src='https://demo.bosathemes.com/shoppable/camera/wp-content/uploads/sites/36/2024/06/main-logo.png'/></Link>
        </div>
        <div className="seabox lg:flex md:hidden items-center hidden g-8 ">
          <input className='py-2 px-10 bg-[#EBEAEA] border rounded-full' type='search' placeholder='search here' ></input>
          <span className='text-[20px]  absolute  ml-[260px]   border-right:3px solid border-[#dfdede] mr-10  '>< BsSearch /> </span>
          
       </div>     
          <div className='lg:flex gap-5 items-center hidden'>
          <span className='text-[25px]'>< FiPhoneCall /></span>
           <h3>Call Us Now <br />
           < a href='tel:9867183155'> <span className='text-[15px] font-bold'>+6985-125-369</span></a>
        </h3>

        </div>
        <div>
          <span className='text-[25px] flex lg:gap-8'>
        <TbRefresh />
        <FaRegHeart />
        <IoMan />
        <FaCartArrowDown />
        </span>
        </div>
           
      </header>


      <section className="top container flex justify-between text-center py-4 items-center">  
 <div className="checc1 bg-[#0770AE] text-white flex gap-4 items-center py-3 px-3 lg:ml-[150px] relative ">
    <span><CiMenuBurger /></span>
    <h3>Categories</h3>
    <span><RiArrowDropDownLine /></span>
    <div className='checc bg-white border-spacing-2 text-black  absolute hidden w-[170px] top-14 overflow-hidden-x  hover:text-gray-600 '>
     <Link href="/"><p className='hover:text-blue-600 py-2'>Accesories</p></Link>
     <Link href="/"><p className='hover:text-blue-600 py-2'>Camera</p></Link>
     <Link href="/"><p className='hover:text-blue-600 py-2'>Camera Lens</p></Link>
     <Link href="/"><p className='hover:text-blue-600 py-2'>Camera stands</p></Link>
     <Link href="/"><p className='hover:text-blue-600 py-2'>Flash Light</p></Link>
     
      
      </div> 
 </div>

<nav className="">
  <ul className="lg:flex font-bold text-[15px] text-black py-3 gap-10 hidden ">
  <Link href="/"><li className=' hover:text-blue-600'>Home</li></Link>
      <Link href="/about">
    <li  className=' hover:text-blue-600 '>
      About
   </li>
   </Link>
   <Link href="/shop"><li  className=' hover:text-blue-600'>Shop</li></Link>
   <Link href="/contact"><li  className=' hover:text-blue-600'>Contact</li></Link>
   <Link href="/blog"><li  className=' hover:text-blue-600'>Blog</li></Link>
    
    
  </ul>
  </nav> 
  <div>
    <h3 className="text-[white] font-bold bg-[#0770AE] lg:inline-flex p-3 hidden ">SHOP NOW</h3>
  </div>
  <div>
    <h3 className='flex gap-3 lg:hidden items-center'><CiMenuBurger />
    Menu</h3>
  </div>


</section>
      <hr/>
      </section>
    </>
  )
}

export default Header 
