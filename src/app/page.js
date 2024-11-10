"use client"
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCameraOutline } from "react-icons/io5";
import { LuFocus } from "react-icons/lu";
import { HiOutlineCube } from "react-icons/hi2";
import { IoFlashOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { IoMan } from "react-icons/io5";
import { useEffect, useState } from "react";
import Link from "next/link";
import { camera } from "./data.jsx/Data";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Home() {
  let [products,setProducts]=useState([])
   
  return (
   <>
   
   <section className="capture container bg-slate-200 lg:flex py-9 gap-4">
    
    <div className="w-[60%] py-16 px-7  lg:order-2 justify-center">
      <h3 className=" top-40 left-40 text-[blue] uppercase font-medium text-[20px]">SHOP TO GET WHAT YOU lOVE</h3>
      <h1 className=" font-bold  py-4 text-[50px]">Ready To Capture<br/> 
        Every Moment</h1>
        <p className="py-4">Venenatis consequat facilisis iste diam pede nam a nisi egestas ipsam<br/> incidunt luctus! Ullam quibusdam mi. Accumsan iaculis, soluta fugit.</p>
   <button className=" p-2 bg-transparent border-[#0770AE] border-2 text-[#0770AE] text-20px hover:bg-[#0770AE] hover:text-white py-3 px-5">DISCOVER SHOP</button>
    </div>
    <div className="w-[50%]">
      <img  className='w-[100%] p-5 transition duration-150 ease-in hover:rotate-6 hover:scale-100 ' src='https://demo.bosathemes.com/shoppable/camera/wp-content/uploads/sites/36/2024/06/banner-image.png'/>
    </div>

   </section>
   <section className=" container py-6 icons justify-between gap-5 flex ">
    <div className="border-2 inline-block">
      <div className="rounded-full inline-flex p-9 m-9  bg-transparent border-4">
     <span className="text-[58px] p-6"><IoCameraOutline /></span> 
     
      </div>
   
      <h2 className="text-center font-serif text-[40px]">camera</h2>
     <p className="py-5 text-[18px] text-center">VIEW SHOP</p>
    </div>
    <div className="border-2 inline-block">
      <div className="rounded-full inline-flex p-9 m-9  bg-transparent border-4">
     <span className="text-[58px] p-6"><LuFocus /></span> 
     
      </div>
   
      <h2 className="text-center font-serif text-[40px]">LENSES</h2>
     <p className="py-5 text-[18px] text-center">VIEW SHOP</p>
    </div>
    <div className="border-2 inline-block">
      <div className="rounded-full inline-flex p-9 m-9  bg-transparent border-4">
     <span className="text-[58px] p-6"><HiOutlineCube /></span> 
     
      </div>
   
      <h2 className="text-center font-serif text-[40px]">Accessories</h2>
     <p className="py-5 text-[18px] text-center">VIEW SHOP</p>
    </div>
    <div className="border-2 inline-block">
      <div className="rounded-full inline-flex p-9 m-9  bg-transparent border-4">
     <span className="text-[58px] p-6"><IoFlashOutline /></span> 
     
      </div>
   
      <h2 className="text-center font-serif text-[40px]">Flash Lights</h2>
     <p className="py-5 text-[18px] text-center">VIEW SHOP</p>
    </div>
   </section>
   <section className="product">
    <h3 className="text-center text-[#0770AE]">NEW ARRIVALS</h3>
    <h1 className="text-center text-[45px] text-[black-800] font-bold">NEW PRODUCTS</h1>
<div className="react container lg:flex ">
  <div className="lg:w-[70%]  flex flex-wrap">
    {/* {products.map((a)=>(
      <div className="lg:w-[25%] w-[50%] justify-center">
       <img className="w-[120px] h-[170px] shadow-xl p-3 " src={a.image} />
       <h2><Link href={`/details/${a.id}`}>{a.title}</Link></h2>
       <h2 className="border-[2px] inline-block p-2">{a.price}</h2>
       <p>Add To Cart</p>
      </div>
    ))} */}
    {camera.map((a)=>(
      <div className="lg:w-[25%] w-[50%] justify-center">
      <img className="w-[120px] h-[170px] shadow-xl p-3 " src={a.image} />
      <h2><Link href={`/details/${a.id}`}>{a.title}</Link></h2>
      <h2 className="border-[2px] inline-block p-2">{a.price}</h2>
      <p>Add To Cart</p>
     </div>
    ))}

  </div>
  <div className="lg:w-[30%] h-[30%] relative overflow-y-hidden  ">
    
     <img className="bg-slate-600 h-[100%]" src="https://demo.bosathemes.com/shoppable/camera/wp-content/uploads/sites/36/2024/06/home13_image23.jpg" />
     <div className="chech ">

     </div>
  </div>

</div>
   </section>

<section className="experience bg-[#F4F4F4] py-6">
  <div className="container flex place-items-start">
    
    <div className="exleft w-[45%]">
    
    <img className="rounded-full border-4 w-full " src="https://demo.bosathemes.com/shoppable/camera/wp-content/uploads/sites/36/2024/06/home10_img2.jpg"/>
     
    </div>
    <div className="exright w-[55%] p-12">
      <h2 className="text-[20] text-blue-600 font-bold py-5">DISCOVER NEW EXPERIENCES</h2>
      <h1 className=" text-[50px] font-bold text-black">Capture Every Moment</h1>
      <p className=" text-[20px]">Venenatis consequat facilisis iste diam pede nam a nisi egestas ipsam <br/>incidunt luctus! Ullam quibusdam mi. Accumsan iaculis, soluta fugit.<br/> Cupidatat consequatur a temporibus est cupidatat, dictumst.</p>
  
<div className="pt-5">
<h2 className="text-[18px] font-bold">BUILD QUALITY</h2>
   <div className="bg-[#EEEEEE] h-4 rounded-full">
      <div className="bg-blue-900 w-[90%] h-full text-xs flex justify-end items-center text-white">90%</div>
   </div>
</div>
<div className="py-7">
<h2 className="text-[18px] font-bold">BUILD QUALITY</h2>
   <div className="bg-[#EEEEEE] h-4 rounded-full">
      <div className="bg-[#F9AB00] w-[75%] h-full text-xs flex justify-end items-center text-white">75%</div>
   </div>
</div>
<div>
<h2 className="text-[18px] font-bold">BUILD QUALITY</h2>
   <div className="bg-[#EEEEEE] h-4 rounded-full">
      <div className="bg-[#DD6666] w-[85%] h-full text-xs flex justify-end items-center text-white">85%</div>
   </div>
</div>
  <div className="py-5">
  <button className=" p-2 bg-transparent border-[#0770AE] border-2 text-[#0770AE] text-20px hover:bg-[#0770AE] hover:text-white py-3 px-5">READ MORE</button>
  </div>
    </div>

  </div>

</section>
<section className="offer container py-4">
<div className="text-center text-blue-700">DISC 50% SELECTED ITEMS</div>
<div className="text-center font-bold text-[30px]">Best Offer For This Year</div>
<div className="place-items-center">
<Swiper
 slidesPerView={4}
        spaceBetween={20}
        startSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {camera.map((a)=>(
          <SwiperSlide>
            <div className="">
              <img className="w-[150px]" src={a.image}/>
            </div>
          </SwiperSlide>
        ))}
       
        
      </Swiper>
</div>
</section>


<section className="container blog">
<h3 className="text-[#0770AE] font-bold text-[20]">OUR BLOG</h3>
<div className="flex justify-between">
<h1 className="text-[45px] text-[black-800] font-bold">Latest Blogs</h1>
  <button className=" p-2 bg-transparent border-[#0770AE] border-2 text-[#0770AE] text-20px hover:bg-[#0770AE] hover:text-white py-3 px-5">READ MORE</button>
</div>
<div className="blobox lg:flex py-7 gap-6">
  <div className="bleft w-[32%]">
    <img src="https://demo.bosathemes.com/shoppable/camera/wp-content/uploads/sites/36/2024/06/blog-4-768x512.jpg"/>
    <h1 className="text-[25px] text-[black-800] font-sans" >Weekend Discount & Festival Sale For Camera</h1>
    <div className="flex gap-10 pt-5">
      <h4 className="flex items-center">
      <p> <IoMdTime /></p>
       <p> june 20, 2024</p>
      </h4>
      <h4 className="flex items-center">
      <p><IoMan /></p> <p>Demoteam</p>
      </h4>
    </div>
    <p className="py-6 font-serif">Tempora fermentum, ipsam quae egestas <br/> habitant pretium pellentesque eveniet mi lorem <br/>incidunt varius penatibus, cum.</p>
  <div className="border-2 font-[#EEEEEE] inline-block hover:bg-teal-600">Learn more</div>
  </div>
  <div className="bleft w-[32%]">
    <img src="https://demo.bosathemes.com/shoppable/camera/wp-content/uploads/sites/36/2024/06/blog-3-768x512.jpg"/>
    <h1 className="text-[25px] text-[black-800] font-sans" >Weekend Discount & Festival Sale For Camera</h1>
    <div className="flex gap-10 pt-5">
      <h4 className="flex items-center">
      <p> <IoMdTime /></p>
       <p> june 20, 2024</p>
      </h4>
      <h4 className="flex items-center">
      <p><IoMan /></p> <p>Demoteam</p>
      </h4>
    </div>
    <p className="py-6 font-serif">Tempora fermentum, ipsam quae egestas <br/> habitant pretium pellentesque eveniet mi lorem <br/>incidunt varius penatibus, cum.</p>
  <div className="border-2 font-[#EEEEEE] inline-block hover:bg-teal-600">Learn more</div>
  </div>
  <div className="bleft w-[32%]">
    <img src="https://demo.bosathemes.com/shoppable/camera/wp-content/uploads/sites/36/2024/06/blog-2-768x512.jpg"/>
    <h1 className="text-[25px] text-[black-800] font-sans" >The Most Popular Digital Camera Coming In This Month</h1>
    <div className="flex gap-10 pt-5">
      <h4 className="flex items-center">
      <p> <IoMdTime /></p>
       <p> june 20, 2024</p>
      </h4>
      <h4 className="flex items-center">
      <p><IoMan /></p> <p>Demoteam</p>
      </h4>
    </div>
    <p className="py-6 font-serif">Tempora fermentum, ipsam quae egestas <br/> habitant pretium pellentesque eveniet mi lorem <br/>incidunt varius penatibus, cum.</p>
  <div className="border-2 font-[#EEEEEE] inline-block hover:bg-teal-600">Learn more</div>
  </div>

</div>
</section>

   </>
  );
}
