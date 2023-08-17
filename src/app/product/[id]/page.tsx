import Price from '@/app/components/Price'
import { singleProduct } from '@/app/data'
import Image from 'next/image'
import React from 'react'

const SingleProductPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-red-500
    md:flex-row'>
      {/*image container*/}
      {singleProduct.img && (
        <div className="relative w-full h-1/2">
            <Image 
            src={singleProduct.img}
            alt=""
            className='object-contain'
            fill/>
        </div>
      )}
      <div className='h-1/2'>
        <h1>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
      </div>
    </div>
  )
}

export default SingleProductPage