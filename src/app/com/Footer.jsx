import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

function Footer() {
  return (
    <>
     <section className='footer bg-slate-300'>
      <div className='button container flex justify-between py-5' >

        <div className='w-40%'>
          <h3 className='py-3'>ABOUT OUR COMPANY</h3>
          <p>Voluptatibus atque habitasse? Cum, parturient, irure. Nunc,<br/> illo, vehicula. Temporibus, laoreet et, praesentium enim<br/> quidem, imperdiet facilisis unde, lacinia, eligendi? Animi architecto netus<br/> ridiculus harum volutpat asperiores. Vehicula, pariatur orci aliquip porttitor augue est.</p>
        </div>
        <div className='w-19%'>
          <h3 className='py-3'>USEFUL LINKS</h3>
          <ul>
        <li> FAQs</li> 
<li>Pricing Plans</li>
<li>Tracks</li>
<li>Your Orders</li>
          </ul>
        </div>
        <div className='w-19%'>
          <h3 className='py-3'>WITH LINKS</h3>
         <ul>
          <li>Our Story</li>
<li>Job / Career</li>
<li>Store Locator</li>
<li>Contact Us</li> 
</ul>
        </div>
        <div className='w-19%'>
          <h3 className='py-3'>CUSTOMER SERVICES</h3>
          <ul>
            <li>My Account</li>
            <li>Terms Of Use</li>
            <li>Deliveries & Returns</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        
        </div>

      <section className='last container py-5  flex justify-between'>
        <div className=''>
          <ul className='flex gap-3'>
            <li><FaFacebook /></li>
            <li><BsInstagram /></li>
            <li><FaTwitter /></li>
            <li><IoLogoYoutube /></li>
            </ul> </div>
        <div className=''> 
          <img src='https://demo.bosathemes.com/shoppable/camera/wp-content/uploads/sites/36/2024/06/main-logo.png'/>
        </div>
        <div className=''> 
          <p>Copyright © 2024 Hello Shoppable. Powered by WordPress</p>
        </div>
        
      </section>
      </section> 
    </>
  )
}

export default Footer
