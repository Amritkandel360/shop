"use client"
import { camera } from '@/app/data.jsx/Data';
import { useParams } from 'next/navigation';
import React from 'react'
import { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
function page({params}) {
    let [products,setProducts]=useState([])
  useEffect(()=>{fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then(res=>res.json())
    .then(json=>setProducts(json))},[])
    let {id}=useParams()
    let abc=camera.find((a)=>a.id==id)
  return (
  
    <>
    {/* <div className='flex container ml-20'>
        <div className='w-50%'>
        <img className='w-100  border-4 p-5 hover:scale-x-150'src={products.image}/>
        </div>
    <div className='w-60% text-center m-10 ml-20 '>
    <h1 className='text-center'>{products.title}</h1>
    <p className='py-2  border-2 inline-block p-4 hover:bg-zinc-400'> price:{products.price}</p> <br/>
    <div className='py-2  mt-4  inline-flex text-[20px] gap-4 border-2  p-4 hover:bg-red-400'> cart to add <p className='text-center'><FaCartArrowDown /></p> </div>
    
    
    </div>
  

</div> */}
<div className='flex container ml-20'>
        <div className='w-50%'>
        <img className='w-100  border-4 p-5 hover:scale-x-150'src={abc.image}/>
        </div>
    <div className='w-60% text-center m-10 ml-20 '>
    <h1 className='text-center'>{abc.title}</h1>
    <p className='py-2  border-2 inline-block p-4 hover:bg-zinc-400'>{abc.price}</p> <br/>
    <div className='py-2  mt-4  inline-flex text-[20px] gap-4 border-2  p-4 hover:bg-red-400'> cart to add <p className='text-center'><FaCartArrowDown /></p> </div>
    
    
    </div>
  

</div>
    </>
  )
}

export default page
