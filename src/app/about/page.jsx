import React from 'react'
import { FaRegCircleDot } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { FaArrowTrendUp } from "react-icons/fa6";

function page() {
  return (
    <>
      <section className='apic relative'>
        <img className='w-[100%] h-[370px] object-cover  ' src='https://demo.bosathemes.com/shoppable/camera/wp-content/uploads/sites/36/2024/06/home13_image27.jpg'/>
<h2 className='text-white font-bold text-[60px] absolute top-40 left-[700px]'>About Us</h2>
      </section>
      <section className='container mx-auto flex py-7'>
        <div className='w-[33%]'>
          <h1 className='text-[30px] font-bold'>How We Became Best<br/> Among Others In The<br/> Online Market ?</h1>
        </div>
        <div className='w-[33%]'>
          <p>Vivamus ex, pellentesque, ratione! Consequat dolor, nihil convallis ligula. Cum maxime vivamus iaculis officia amet, inventore, possimus, illo, morbi repellat nostrud sodales cras facilis, facilisi maxime vivamus iaculi.</p>
        </div>
        <div className='w-[33%]  bg-slate-400 p-3 inline-block '>
          <div className='flex gap-5 items-center' >
        <FaRegCircleDot /> <p>Irure auctor magnis parturient quo.</p></div>
       <div className='flex gap-5 items-center'> <FaRegCircleDot /> <p>Irure auctor magnis parturient quo.</p></div>
       <div className='flex gap-5 items-center'> <FaRegCircleDot /> <p>Irure auctor magnis parturient quo.</p></div>
       <div className='flex gap-5 items-center'><FaRegCircleDot /> <p>Irure auctor magnis parturient quo.</p></div>
        </div>

      </section>

      <section className='container flex gap-5 py-5'>
        <div className='w-[32%]'>
          <div className='text-center border  bg-slate-200  '>
            <p className='text-center border rounded-full  border-black m-3 p-3 inline-block '><GrUserWorker /></p>
            <h2 className='font-bold'>What We Really Do?</h2>
            <p className='py-3' >Vivamus accusamus, vel nam quisquam.<br/> Ipsa aliqua nostrum in cum ut fugiat<br/> penatibus cubilia cubilia.</p>
          </div>
        </div>
        <div className='w-[32%]'>
        <div className='text-center border  bg-slate-200  '>
            <p className='text-center border rounded-full  border-black m-3 p-3 inline-block '><HiOutlineLightBulb /></p>
            <h2 className='font-bold'>Our Company Vision</h2>
            <p className='py-3'>Vivamus accusamus, vel nam quisquam.<br/> Ipsa aliqua nostrum in cum ut fugiat<br/> penatibus cubilia cubilia.</p>
          </div>
        </div>
        <div className='w-[32%]'>
        <div className='text-center border  bg-slate-200  '>
            <p className='text-center border rounded-full  border-black m-3 p-3 inline-block '><FaArrowTrendUp /></p>
            <h2 className='font-bold'>History Of Beginning</h2>
            <p className='py-3'>Vivamus accusamus, vel nam quisquam.<br/> Ipsa aliqua nostrum in cum ut fugiat<br/> penatibus cubilia cubilia.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
