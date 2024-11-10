"use client"
import { VscCalendar } from "react-icons/vsc";
import { IoManSharp } from "react-icons/io5";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

function page() {
  return (
    <>
 <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        slidesPerView: "auto",

        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='relative'>
          <img className='w-[100%] h-[380px] object-cover' src="https://swiperjs.com/demos/images/nature-1.jpg" />
          <div className='over absolute top-[140px] start-[450px]'> 
            <p className='text-center'>camera</p>
            <h2 className='  text-[30px] font-bold hover:color-[#FFFFFF] '>Weekend Discount & Festival Sale For Camera</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, at vitae adipisci<br/> cumque totam nulla perspiciatis sunt molestias dignissimos ipsa.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[100%] h-[380px] object-cover' src="https://swiperjs.com/demos/images/nature-2.jpg" />
          <div className='over absolute top-[140px] start-[450px]'> 
            <p className='text-center'>camera</p>
            <h2 className='  text-[30px] font-bold hover:color-[#FFFFFF] '>The most popular digitalize camera is coming in this month</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, at vitae adipisci<br/> cumque totam nulla perspiciatis sunt molestias dignissimos ipsa.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[100%] h-[380px] object-cover' src="https://swiperjs.com/demos/images/nature-3.jpg" />
          <div className='over absolute top-[140px] start-[450px]'> 
            <p className='text-center'>camera</p>
            <h2 className='  text-[30px] font-bold hover:color-[#FFFFFF] '>Introducing Innovative Digital Camera Lensa TR 6000</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, at vitae adipisci<br/> cumque totam nulla perspiciatis sunt molestias dignissimos ipsa.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[100%] h-[380px] object-cover' src="https://swiperjs.com/demos/images/nature-4.jpg" />
          
          <div className='over absolute top-[140px] start-[450px]'> 
            <p className='text-center'>camera</p>
            <h2 className='  text-[30px] font-bold hover:color-[#FFFFFF] '>Weekend Discount & Festival Sale For Camera</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, at vitae adipisci<br/> cumque totam nulla perspiciatis sunt molestias dignissimos ipsa.</p>
          </div>

        </SwiperSlide>
      </Swiper>
      <section className='container mx-auto flex py-12 justify-center'>
        <div className="tleft w-[70%]  ">
          <div className=" gap-7 flex">
          <div className="ileft w-[40%">
            <img className='w-[100%] h-[250px] object-cover' src='https://demo.bosathemes.com/shoppable/camera/wp-content/uploads/sites/36/2024/06/blog-4-420x300.jpg'/>
          </div>
          <div className="iright w-[60%]">
            <p>Camera</p>
            <h2 className="font-bold">Weekend Discount & Festival Sale For<br/> Camera</h2>
            <div className="flex gap-4 items-center py-4">
            <p><VscCalendar /> </p> <p>jun,20,2024</p>
            <p><IoManSharp /></p> <p> Demoteam</p>
            
            </div>
            <p>Tempora fermentum, ipsam quae egestas habitant pretium<br/> pellentesque eveniet mi lorem incidunt varius penatibus,<br/> cum.</p>
          </div>
          </div>
          <div className="py-3">
          <hr/>
          </div>
          
          <div className=" gap-7 py-6 flex">
          <div className="ileft w-[40%">
            <img className='w-[100%] h-[250px] object-cover' src='https://demo.bosathemes.com/shoppable/camera/wp-content/uploads/sites/36/2024/06/blog-3-420x300.jpg'/>
          </div>
          <div className="iright w-[60%]">
            <p>Digital</p>
            <h2 className="font-bold">Introducing Innovative Digital Camera<br/> Lensa TR 6000</h2>
            <div className="flex gap-4 items-center py-4">
            <p><VscCalendar /> </p> <p>jun,20,2024</p>
            <p><IoManSharp /></p> <p> Demoteam</p>
            
            </div>
            <p>Tempora fermentum, ipsam quae egestas habitant pretium<br/> pellentesque eveniet mi lorem incidunt varius penatibus,<br/> cum.</p>
          </div>
          </div>
          <div className="py-3">
          <hr/>
          </div>
          
          <div className=" gap-7 py-6 flex">
          <div className="ileft w-[40%">
            <img className='w-[100%] h-[250px] object-cover' src='https://demo.bosathemes.com/shoppable/camera/wp-content/uploads/sites/36/2024/06/blog-2-420x300.jpg'/>
          </div>
          <div className="iright w-[60%]">
            <p>Camera</p>
            <h2 className="font-bold">The Most Popular Digital Camera Coming In<br/> This Month</h2>
            <div className="flex gap-4 items-center py-4">
            <p><VscCalendar /> </p> <p>jun,20,2024</p>
            <p><IoManSharp /></p> <p> Demoteam</p>
            
            </div>
            <p>Tempora fermentum, ipsam quae egestas habitant pretium<br/> pellentesque eveniet mi lorem incidunt varius penatibus,<br/> cum.</p>
          </div>
          </div>
          <div className="py-3">
          <hr/>
          </div>
          
          <div className=" gap-7 py-6 flex">
          <div className="ileft w-[40%">
            <img className='w-[100%] h-[250px] object-cover' src='https://demo.bosathemes.com/shoppable/camera/wp-content/uploads/sites/36/2024/06/blog-1-420x300.jpg'/>
          </div>
          <div className="iright w-[60%]">
            <p>Digital</p>
            <h2 className="font-bold">New Camera D70 Don’t Miss Any Moments<br/> Anywhere</h2>
            <div className="flex gap-4 items-center py-4">
            <p><VscCalendar /> </p> <p>jun,20,2024</p>
            <p><IoManSharp /></p> <p> Demoteam</p>
            
            </div>
            <p>Tempora fermentum, ipsam quae egestas habitant pretium<br/> pellentesque eveniet mi lorem incidunt varius penatibus,<br/> cum.</p>
          </div>
          </div>
          </div>
       
       
        <div className="tright w-[30%]">
          <h2>Search</h2>
          <div>
          <input type='text border-2px shadow-inner-2'></input>
          <p className='bg-black text-white inline-block'>Search</p>
          </div>
          <h2 className='py-3'>Recent Post</h2>
          <p className='py-2'>Weekend Discount & Festival Sale<br/> For Camera</p>
          <p className='py-2'>Introducing Innovative Digital Camera <br/>Lensa TR 6000</p>
          <p className='py-2'>The Most Popular Digital Camera Coming <br/>In This Month</p>
          <p className='py-2'>New Camera D70 Don’t Miss Any Moments<br/> Anywhere</p>
          <h2 className='font-bold py-2'>Receny Comment</h2>
          <p>No comment to show</p>
        </div>
      </section>
    </>
  )
}

export default page
