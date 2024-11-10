"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function page() {
  let[products,setProducts]=useState([])
  useEffect(()=>{fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProducts(json))},[])
  return (
    <>
    
    <div className='container mx-auto flex flex-wrap gap-6 justify-center'>
    <h1 className='text-3xl font-bold p-5'>Shop</h1>
     {products.map((a)=>(
      <div className="lg:w-[25%] w-[50%] py-5 ">
       <img className="w-[120px] h-[170px] shadow-xl p-3   flex flex-wrap" src={a.image} />
       <h2><Link href={`/details/${a.id}`}>{a.title}</Link></h2>
       <h2 className="border-[2px] inline-block p-2">{a.price}</h2>
       <p>Add To Cart</p>
      </div>
    ))}
    </div>
    </>
  )
}

export default page
