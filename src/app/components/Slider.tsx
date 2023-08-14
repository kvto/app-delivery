"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const date = [
    {
        id: 1,
        title: "always fresh and always crispy and always hot",
        image: "/slide1.png"
    },
    {
        id: 2,
        title: "we deliver your order wherever you are in NY",
        image: "/slide2.png"
    },
    {
        id: 3,
        title: "the best pizza to share with your family",
        image: "/slide3.png"
    }
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(()=>{
            ()=>setCurrentSlide(prev=>prev+1)
        }, 2000)
        return () => clearInterval(interval)
    }, [])
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
        
        <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
            <h1 className='text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl'>
                Test
            </h1>
            <button className='bg-red-500 text-white py-4 px-8'>Ordernar</button>
        </div>

        <div className='w-full h-1/2 relative'>
        <Image src="/slide1.png" alt="" fill className='objetc-cover'/>
        </div>
    </div>
  )
}

export default Slider