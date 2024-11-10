import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { ImWhatsapp } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { GoLocation } from "react-icons/go";


function page() {
  return (
    <>
      <section className='image relative'>
        <img className='w-[100%] h-[350px] object-cover ' src='https://demo.bosathemes.com/shoppable/camera/wp-content/uploads/sites/36/2024/06/home13_image27.jpg'/>
<h2 className='text-center text-white  text-[60px] absolute top-[120px] left-[660px]'>Contact Us</h2>
      </section>
      <section className='part py-5 container mx-auto flex'>
<div className='w-[45%]'>
  <h2>Contact And Get In Reach Us !</h2>
  <p>Vivamus ex, pellentesque, ratione! Consequat dolor, nihil convallis ligula. Cum maxime vivamus iaculis officia amet, inventore, possimus, illo, morbi repellat nostrud sodales cras facilis, facilisi maxime vivam.</p>

<h3 className='py-5 font-semibold'>Follow us on social media :</h3>
<ul className='flex gap-5'>
  <li className='text-[22px] text-[#0770AE] '><FaFacebook /></li>
  <li className='text-[22px] text-[#0770AE]'><IoLogoTwitter /></li>
  <li className='text-[22px] text-[#0770AE]'><IoLogoYoutube /></li>
  <li className='text-[22px] text-[#0770AE]'><ImWhatsapp /></li>
  <li className='text-[22px] text-[#0770AE]'><FaInstagramSquare /></li>
  <li className='text-[22px] text-[#0770AE]'><FaBehanceSquare /></li>
</ul>
<div className='py-4'>
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1368.8646229632357!2d85.32943338256419!3d27.71772012969686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1726591239730!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
</div>
</div>
<div className='w-[50%] border shadow-inner text-start container p-5'>
  <p>Your Name</p>
  <input className=' bg-[#dddada] my-2 py-2 border radius-pill w-[500px]' type='text padding-[100px] s-[3px]'/>
  <p>Your Email</p>
  <input className=' bg-[#dddada] my-2 py-2 border radius-pill w-[500px]' type='text padding-[100px] s-[3px]'/>
  <p>Subject</p>
  <input className=' bg-[#dddada] my-2 py-2 border radius-pill w-[500px]' type='text padding-[100px] s-[3px]'/>
  <p>Your message(optional)</p>
  {/* <input className=' bg-[#dddada] my-2 py-2 border radius-pill w-[500px]' type='textarea padding-[100px] s-[3px] rows="3" '/> */}
  <textarea class="form-control bg-[#dddada] my-2 py-2 border radius-pill w-[500px]" id="exampleFormControlTextarea1" rows="3"></textarea>
  <div><button className='bg-blue-700 p-2'>Submit</button></div>
</div>


      </section>
      <section className='container flex gap-5 py-4'>
  <div className='border-3 bg-slate-500 text-white w-[25%] p-2'>
    <p className='flex gap-3 items-center'>
    <GoLocation /> Visited Us<br/></p>
      <p>65th Street, Los Angeles,<br/>
    3rd Street, San Andreas,</p>
  </div>
  <div className='border-3 bg-slate-500 text-white w-[25%] p-2'>
    <p className='flex gap-3 items-center '>
    <GoLocation /> 24/7 Service<br/></p>
    <p>Call us on :</p>
      <p>Tel : +81-245-54896<br/>
      Mob : +81-125-87965</p>
  </div>
  <div className='border-3 bg-slate-500 text-white w-[25%] p-2'>
    <p className='flex gap-3 items-center'>
    <GoLocation /> Visited Us<br/></p>
      <p>65th Street, Los Angeles,<br/>
    3rd Street, San Andreas,</p>
  </div>
  <div className='border-3 bg-slate-500 text-white w-[25%] p-2'>
    <p className='flex gap-3 items-center'>
    <GoLocation /> Visited Us<br/></p>
      <p>65th Street, Los Angeles,<br/>
    3rd Street, San Andreas,</p>
  </div>
</section>
    </>
  )
}

export default page
